import { HashRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout.jsx';

import Home from './pages/Home.jsx';
import Habilities from './pages/Habilities.jsx';
import Contact from './Contact/Home.jsx';

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/habilities' element={<Habilities />} />
                    <Route path='/contact' element={<Contact />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}
