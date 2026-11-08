import { Outlet } from 'react-router-dom';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

import './Layout.css';

export default function Layout() {
    return (
        <div>
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}