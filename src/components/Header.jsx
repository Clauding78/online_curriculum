import { useEffect } from 'react';
import './Header.css';

function Header() {
    useEffect(() => {
        const hamButton = document.getElementById('header_ham_menu_button');
        const dropDownMenu = document.getElementById('_fullPage_dropDownMenu');

        if (!hamButton || !dropDownMenu) return;

        function handleHamClick(e) {
            e.stopImmediatePropagation();
            dropDownMenu.classList.toggle('active');
            hamButton.classList.toggle('change');
        }

        function handleMenuClick(e) {
            e.stopPropagation();
        }

        function handleDocumentClick() {
            dropDownMenu.classList.remove('active');
            hamButton.classList.remove('change');
        }

        hamButton.addEventListener('click', handleHamClick);
        dropDownMenu.addEventListener('click', handleMenuClick);
        document.addEventListener('click', handleDocumentClick);

        // -- cleanup: essencial em React, senão duplicas listeners
        // sempre que o componente remontar (StrictMode, trocas de rota, etc.)
        return () => {
            hamButton.removeEventListener('click', handleHamClick);
            dropDownMenu.removeEventListener('click', handleMenuClick);
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    return (
        <div>
            <header data-i18n-ns='main/header'>
                <a className='Container_site_title' href=''>
                    <span className='site_title'>mySelf</span>
                </a>

                <nav>
                    <Link to="/habilities">
                        <span data-i18n='header.1_url'></span>
                    </Link>
                    <a href=''>
                        <span data-i18n='header.2_url'></span>
                    </a>
                    <a href=''>
                        <span data-i18n='header.3_url'></span>
                    </a>
                    <Link to="/contact">
                        <span data-i18n='header.4_url'></span>
                    </Link>
                </nav>

                <select className='languageSelect' onChange={(event) => window.setLanguage(event.target.value)}>
                    <option value='pt'>pt-PT</option>
                    <option value='en'>en-US</option>
                </select>

                <button className='header_ham_menu_button' id='header_ham_menu_button'>
                    <div className='HMI_bar_1'></div>
                    <div className='HMI_bar_2'></div>
                    <div className='HMI_bar_3'></div>
                </button>
            </header>

            <div
                id='_fullPage_dropDownMenu'
                className='_fullPage_dropDownMenu'
                data-i18n-ns='main/header'
            >
                <nav>
                    <a href=''>
                        <span data-i18n='header.1_url'></span>
                    </a>
                    <a href=''>
                        <span data-i18n='header.2_url'></span>
                    </a>
                    <a href=''>
                        <span data-i18n='header.3_url'></span>
                    </a>
                    <a href=''>
                        <span data-i18n='header.4_url'></span>
                    </a>
                </nav>

                <select className='languageSelect' onChange={(event) => window.setLanguage(event.target.value)}>
                    <option value='pt'>pt-PT</option>
                    <option value='en'>en-US</option>
                </select>
            </div>
        </div>
    );
}

export default Header;
