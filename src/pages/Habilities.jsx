import './Habilities.css';
import { useEffect } from 'react';
import { _create_Card } from '../js/main.js';

export default function Habilities() {
    useEffect(() => {
        _create_Card(
        // -- title, img, code-text (.json lang)
            ['', 'habilities.1_card_title', 'card_kali.png', 'habilities.1_card_text', 'https://wallpaperaccess.com/kali-linux-mobile'],
            ['', 'habilities.2_card_title', 'card_code.png', 'habilities.2_card_text', 'https://www.flaticon.com/free-icon/coding_318966'],
            ['', 'habilities.3_card_title', 'card_assist.png', 'habilities.3_card_text', 'https://www.iconsdb.com/white-icons/headphones-4-icon.html'],
            ['/habilities/softwares', 'habilities.4_card_title', 'card_software.png', 'habilities.4_card_text', 'https://www.magnific.com/icon/web-development_11097252#fromView=keyword&page=1&position=95&uuid=7492d80f-914e-48ce-81c6-33d5d028708e']
        );
    }, []);

    return (
        <div data-i18n-ns='pages/habilities'>
            <span>Habilities Page</span>

            <div className='Container_carroussels'>
                <div className='Container_tag_Box'>
                    <div className='tag_Box_Group'>
                        <span>Html</span>
                        <span>Css</span>
                        <span>JavaScript</span>
                        <span>Python</span>
                        <span>Php</span>
                        <span>Sql</span>
                        <span>Node.JS</span>
                        <span>React</span>
                        <span>C</span>
                        <span>C++</span>
                    </div>

                    <div aria-hidden className='tag_Box_Group'>
                        <span>Html</span>
                        <span>Css</span>
                        <span>JavaScript</span>
                        <span>Python</span>
                        <span>Php</span>
                        <span>Sql</span>
                        <span>Node.JS</span>
                        <span>React</span>
                        <span>C</span>
                        <span>C++</span>
                    </div>
                </div>

                <div className='Container_tag_Box'>
                    <div className='tag_Box_Group'>
                        <span>Motherboard</span>
                        <span>CPU</span>
                        <span>RAM</span>
                        <span>GPU</span>
                        <span>PSU</span>
                        <span>CMOS</span>
                        <span>Cooler</span>
                        <span>HDD</span>
                        <span>Sata</span>
                        <span>NVMe</span>
                    </div>

                    <div className='tag_Box_Group'>
                        <span>Motherboard</span>
                        <span>CPU</span>
                        <span>RAM</span>
                        <span>GPU</span>
                        <span>PSU</span>
                        <span>CMOS</span>
                        <span>Cooler</span>
                        <span>HDD</span>
                        <span>Sata</span>
                        <span>NVMe</span>
                    </div>
                </div>
            </div>

            <br />
            <br />

            <span data-i18n='habilities.nonStop'></span>

            <br />
            <br />

            <div id='card_Container' className='card_Container' />

            <br />
        </div>
    );
}
