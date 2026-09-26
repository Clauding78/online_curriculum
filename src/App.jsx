import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout.jsx';

import Home from './pages/Home.jsx';
import Habilities from './pages/Habilities.jsx';
import Resources from './pages/Resources.jsx';
import FAQs from './pages/FAQs.jsx';
import Contact from './pages/Contact.jsx';

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='/habilities' element={<Habilities />} />
                <Route path='/resources' element={<Resources />} />
                <Route path='/faqs' element={<FAQs />} />
                <Route path='/contact' element={<Contact />} />
            </Route>
        </Routes>
    );
}

export default App;
