import { HashRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout.jsx';

import Home from './pages/Home.jsx';

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<Layout />} >
                    <Route path='/' element={<Home />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}