(function () {
    const _SUPORTED_LANGUAGE = ['pt', 'en'];
    const _DEFAULT_LANGUAGE = 'en';
    const _STORED_LANGUAGE = 'site_language';

    function detect_language() {
        const _SAVED = localStorage.getItem(_STORED_LANGUAGE);

        if (_SAVED && _SUPORTED_LANGUAGE.includes(_SAVED)) {
            return _SAVED;
        }

        const _BROWSER_LANG = (navigator.language || navigator.userLanguage || '').toLowerCase();

        if (_BROWSER_LANG.startsWith('pt')) {
            return 'pt';
        }

        // -- en
        return _DEFAULT_LANGUAGE;
    }

    window.language = detect_language();

    document.addEventListener('DOMContentLoaded', () => {
        const _langSelects = document.querySelectorAll('.languageSelect');

        _langSelects.forEach((select) => {
            select.value = window.language;
        });
    });






    window.setLanguage = function (lang) {
        if (!_SUPORTED_LANGUAGE.includes(lang)) return;

        localStorage.setItem(_STORED_LANGUAGE, lang);
        window.language = lang;

        applyTranslations();
    }

    function getNestedValue(obj, path) {
        return path.split('.').reduce(
            (acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined),
            obj
        );
    }




    const _cache = {};

    function fetchNameSpace(ns, lang) {
        const _cacheKey = `${lang}/${ns}`;

        if (_cache[_cacheKey]) return _cache[_cacheKey];

        const _promise = fetch(`/public/lang/${lang}/${ns}.json`)
            .then ((res) => {
                if (!res.ok) throw new Error(`ERROR - File missing "/client/public/lang/${lang}/${ns}.json" ...`);
                return res.json();
            })

            .catch((err) => {
                console.error(err);
                return {};
            });

        _cache[_cacheKey] = _promise;
        return _promise;
    }





    async function applyTranslations() {
        const _CONTAINERS = document.querySelectorAll('[data-i18n-ns]');
        const _LANG = window.language;
        document.documentElement.lang = _LANG;

        // -- sincroniza todos os selects de idioma (incluindo duplicados)
        document.querySelectorAll('.languageSelect').forEach((select) => {
            select.value = _LANG;
        });

        for (const _CONTAINER of _CONTAINERS) {
            const ns = _CONTAINER.getAttribute('data-i18n-ns');
            const data = await fetchNameSpace(ns, _LANG);

            const targets = [
                ...(_CONTAINER.matches('[data-i18n]') ? [_CONTAINER] : []),
                ..._CONTAINER.querySelectorAll('[data-i18n]')
            ];

            targets.forEach((el) => {
                const key = el.getAttribute('data-i18n');
                const value = getNestedValue(data, key);

                if (value === undefined) {
                    console.warn(`Key "${key}" not found in file "/mySelf/assets/lang/${_LANG}/${ns}.json ..."`);
                    return;
                }

                const attr = el.getAttribute('data-i18n-attr');
                
                if (attr) {
                    el.setAttribute(attr, value);

                } else if (el.hasAttribute('data-i18n-html')) {
                    el.innerHTML = value;

                } else {
                    el.textContent = value;
                }
            });

            _CONTAINER.dispatchEvent(new CustomEvent('i18n:applied', { detail: {ns, _LANG, data } }));
        }

        document.dispatchEvent(new CustomEvent('i18n:ready', { detail: { _LANG } }));
    }





    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyTranslations);

    } else {
        applyTranslations();
    }

    window.applyTranslations = applyTranslations;

    let _debounceTimer = null;

    const _OBSERVER = new MutationObserver((mutations) => {
        let _shouldApply = false;

        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node.nodeType !== 1) continue; // -- just elements

                if (node.matches?.('[data-i18n-ns]') || node.querySelector?.('[data-i18n-ns]')) {
                    _shouldApply = true;
                    break;
                }
            }
            if (_shouldApply) break;
        }

        if (_shouldApply) {
            clearTimeout(_debounceTimer);
            _debounceTimer = setTimeout(applyTranslations, 0);
        }
    });

    function startObserving() {
        _OBSERVER.observe(document.body, { childList: true, subtree: true });
    }

    if (document.body) {
        startObserving();
    } else {
        document.addEventListener('DOMContentLoaded', startObserving);
    }
}) ();