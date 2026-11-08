import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export default function Header() {
    const [activeMenu, setActiveMenu] = useState(null);

    useEffect(() => {
        const banner = document.getElementById('offline_banner');

        function updateStatus() {
            banner?.classList.toggle('active', !navigator.onLine);
        }

        window.addEventListener('online', updateStatus);
        window.addEventListener('offline', updateStatus);
        updateStatus();
        

        /*
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
            window.removeEventListener('online', updateStatus);
            window.removeEventListener('offline', updateStatus);
        };
        */
    }, []);

    return (
        <div className='top' data-i18n-ns='main/header'>            
            <div></div>

            <div className='header_container'>
                <div className='offline_banner' id='offline_banner'>offline</div>

                <header>
                    <div className='header_top_row'>
                        <Link
                            className='header_site_logo'
                            to='/'
                        >
                            <span></span>
                        </Link>
                    </div>

                    <nav>
                        <Link to=''><span data-i18n='Header.1st_nav_url'></span></Link>
                        <Link to=''><span data-i18n='Header.2nd_nav_url'></span></Link>
                        <Link to='/contact'><span data-i18n='Header.3rd_nav_url'></span></Link>
                    </nav>

                    <select
                        className='language_Select'
                        onChange={(event) => window.setLanguage(event.target.value)}
                    >
                        <option value='pt'>pt-PT</option>
                        <option value='en'>en-US</option>
                    </select>

                    <button className='header_ham_button'>
                        <hr></hr>
                        <hr></hr>
                        <hr></hr>
                    </button>
                </header>
            </div>

            <div className='full_page_Dropdown'>
                <select
                    className='language_Select'
                    onChange={(event) => window.setLanguage(event.target.value)}
                >
                    <option value='pt'>pt-PT</option>
                    <option value='en'>en-US</option>
                </select>

                <nav>
                    <Link to=''><span>Habilities</span></Link>
                    <Link to=''><span>Projects</span></Link>
                    <Link to=''><span>Wiki</span></Link>
                    <Link to=''><span>Resources</span></Link>
                    <Link to='/contact'><span>Contact</span></Link>
                </nav>
            </div>
        </div>
    );
}