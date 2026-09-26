import './Footer.css';

function Footer() {
    return (
        <footer data-i18n-ns='main/footer'>
            <section className='Footer_top_section'>
                <div className='Container_Footer_mySelf'>
                    <div className='Footer_mySelf_text'>
                        <span data-i18n='footer.footer_text'></span>
                    </div>

                    <div className='Footer_site_title'>
                        <span>mySelf</span>
                    </div>
                </div>
                
                <ul className='Footer_social_media_icon_links'>
                    <li><a href=''><img src='' /></a></li>
                    <li><a href=''><img src='' /></a></li>
                    <li><a href=''><img src='' /></a></li>
                    <li><a href=''><img src='' /></a></li>
                    <li><a href=''><img src='' /></a></li>
                </ul>
            </section>

            <section>
                <ul className='Footer_links_section_ul'>
                    <li className='FLS_block'>
                        <span data-i18n='footer.LS_1st_block_title' className='FLS_block_title'></span>
                        <ul>
                            <li><a data-i18n='footer.LS_1st_block__1_link' href=''></a></li>
                            <li><a data-i18n='footer.LS_1st_block__2_link' href=''></a></li>
                            <li><a data-i18n='footer.LS_1st_block__3_link' href=''></a></li>
                        </ul>
                    </li>

                    <li className='FLS_block'>
                        <span data-i18n='footer.LS_2nd_block_title' className='FLS_block_title'></span>
                        <ul>
                            <li><a data-i18n='footer.LS_2nd_block__1_link' href=''></a></li>
                            <li><a data-i18n='footer.LS_2nd_block__2_link' href=''></a></li>
                            <li><a data-i18n='footer.LS_2nd_block__3_link' href=''></a></li>
                            <li><a data-i18n='footer.LS_2nd_block__4_link' href=''></a></li>
                        </ul>
                    </li>

                    <li className='FLS_block'>
                        <span data-i18n='footer.LS_3rd_block_title' className='FLS_block_title'></span>
                        <ul>
                            <li><a data-i18n='footer.LS_3rd_block__1_link' href=''></a></li>
                            <li><a data-i18n='footer.LS_3rd_block__2_link' href='Projects/Websites/Websites.php'></a></li>
                        </ul>
                    </li>

                    <li className='FLS_block'>
                        <span data-i18n='footer.LS_4th_block_title' className='FLS_block_title'></span>
                        <ul>
                            <li><a data-i18n='footer.LS_4th_block__1_link' href=''></a></li>
                            <li><a data-i18n='footer.LS_4th_block__2_link' href=''></a></li>
                            <li><a data-i18n='footer.LS_4th_block__3_link' href=''></a></li>
                        </ul>
                    </li>
                </ul>
            </section>

            <section className='Footer_bottom_section'>
                <ul className='Footer_bottom_links'>
                    <li><a data-i18n='footer.LD_1st_link' href=''></a></li>
                    <li><a data-i18n='footer.LD_2nd_link' href=''></a></li>
                    <li><a data-i18n='footer.LD_3rd_link' href=''></a></li>
                    <li><a data-i18n='footer.LD_4th_link' href=''></a></li>
                </ul>

                <span className='Footer_copyright'>Copyright &copy 2026 - future, internet anon</span>
            </section>
        </footer>
    );
}

export default Footer;
