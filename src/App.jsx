import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

import Home from './pages/Home';
import Habilities from './pages/Habilities';
import Resources from './pages/Resources';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';

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
