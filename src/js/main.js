export function _create_Card(..._cards) {
    const _card_Container = document.getElementById('card_Container');

    _cards.forEach((_card) => {
        const _link_Area_Element = document.createElement('a');
        _link_Area_Element.href = _card[0];

        const _card_Element = document.createElement('div');

        _card_Element.innerHTML = '';

        _card_Element.classList.add('card');
        _card_Element.innerHTML = `
            <div class='card_innerContainer'>
                <span class='card_title' data-i18n='${_card[1]}'></span>
                <img title='${_card[4]}' src='/public/media/imgs/${_card[2]}'>
                <span class='card_text' data-i18n='${_card[3]}'></span>
            </div>
        `;

        _link_Area_Element.appendChild(_card_Element);
        _card_Container.appendChild(_link_Area_Element);
    });
}