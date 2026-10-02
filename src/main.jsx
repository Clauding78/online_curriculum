import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './main.css';

import './js/main.js';
import './js/language.js';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // -- removed <React.StrictMode> bcuz it was repeating useEffect two times ...
    // -- use element.innerHTML = ''; as another way
    
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
