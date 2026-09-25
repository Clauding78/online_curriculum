import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div>
            <span>Page</span>
            
            <main>
                <Outlet />
            </main>
        </div>
    );
}