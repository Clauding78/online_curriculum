import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    useEffect(() => {
        const banner = document.getElementById('offline_banner');

        function updateStatus() {
            banner?.classList.toggle('active', !navigator.onLine);
        }

        window.addEventListener('online', updateStatus);
        window.addEventListener('offline', updateStatus);
        updateStatus();

        
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
    }, []);

    return (
        <>
            <div className='thumbnail'></div>

            <div className='top'>
                <div className='Container_full_top' onMouseLeave={() => setActiveMenu(null)}>
                    <div id='offline_banner' className='offline_banner'>
                        <span>No Internet connection...</span>
                    </div>
                    
                    <header data-i18n-ns='main/header'>
                        <Link className='Container_site_title' to='/'>
                            <span className='site_title'>mySelf</span>
                        </Link>

                        <nav>
                            <Link to='/habilities' onMouseEnter={() => setActiveMenu('habilities')} onFocus={() => setActiveMenu('habilities')}>
                                <span data-i18n='header.1_url' className={activeMenu === 'habilities' ? 'active' : ''}></span>
                            </Link>

                            <Link to='/resources' onMouseEnter={() => setActiveMenu('resources')} onFocus={() => setActiveMenu('resources')}>
                                <span data-i18n='header.2_url' className={activeMenu === 'resources' ? 'active' : ''}></span>
                            </Link>

                            <Link to='/FAQs' onMouseEnter={() => setActiveMenu('FAQs')} onFocus={() => setActiveMenu('FAQs')}>
                                <span data-i18n='header.3_url' className={activeMenu === 'FAQs' ? 'active' : ''}></span>
                            </Link>

                            <Link to='/contact' onMouseEnter={() => setActiveMenu('contact')} onFocus={() => setActiveMenu('contact')}>
                                <span data-i18n='header.4_url' className={activeMenu === 'contact' ? 'active' : ''}></span>
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
                            <Link to='/habilities'>
                                <span data-i18n='header.1_url'></span>
                            </Link>

                            <Link to='/resources'>
                                <span data-i18n='header.2_url'></span>
                            </Link>

                            <Link to='/FAQs'>
                                <span data-i18n='header.3_url'></span>
                            </Link>

                            <Link to='/contact'>
                                <span data-i18n='header.4_url'></span>
                            </Link>
                        </nav>

                        <select className='languageSelect' onChange={(event) => window.setLanguage(event.target.value)}>
                            <option value='pt'>pt-PT</option>
                            <option value='en'>en-US</option>
                        </select>
                    </div>

                    <div className={`header_nav_links_dropdown ${activeMenu ? 'open' : ''}`}>
                        <button>X</button>
                        
                        {activeMenu === 'habilities' &&
                            <div>
                                <ul className='HNLD_ul'>
                                    <li>
                                        <span className='HNLD_ul_block_title'>Programming</span>
                                        <nav>
                                            <Link to=''><span>Web Development</span></Link>
                                            <Link to=''><span>Desktop Development</span></Link>
                                            <Link to=''><span>Mobile Development</span></Link>
                                        </nav>
                                    </li>

                                    <li>
                                        <span className='HNLD_ul_block_title'>Hardware</span>
                                        <nav>
                                            <Link to=''><span>Component Knowledge</span></Link>
                                            <Link to=''><span>Problem Solving</span></Link>
                                        </nav>
                                    </li>

                                    <li>
                                        <span className='HNLD_ul_block_title'>Programming</span>
                                        <nav>
                                            <Link to=''><span>Web Development</span></Link>
                                            <Link to=''><span>Desktop Development</span></Link>
                                            <Link to=''><span>Mobile Development</span></Link>
                                        </nav>
                                    </li>
                                </ul>
                            </div>
                        }
                        
                        {activeMenu === 'resources' && <div>conteúdo dos resources</div>}

                        {activeMenu === 'FAQs' && <div>conteúdo das FAQs</div>}

                        {activeMenu === 'contact' && <div>maneiras de me incomodar</div>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
