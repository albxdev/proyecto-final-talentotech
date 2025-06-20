import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

// Páginas
import Home from './home/Home';
import Catering from './catering/Catering';
import Menu from './Menu/Menu';


// Estilos globales
import './home-style/home-style.css';

const SetViewport: React.FC = () => {
    useEffect(() => {
        const meta = document.createElement("meta");
        meta.name = "viewport";
        meta.content = "width=device-width, initial-scale=1";
        document.head.appendChild(meta);
    }, []);

    return null;
};

// Desactivar ResizeObserver para evitar el error
if (typeof window !== 'undefined') {
    window.ResizeObserver = class {
        observe() {}
        unobserve() {}
        disconnect() {}
    };
}

const App: React.FC = () => {
    return (
        <Router>
            <SetViewport /> {/* Agrega el meta viewport dinámicamente */}
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catering" element={<Catering />} />
                <Route path="/menu" element={<Menu />} /> 
            </Routes>
        </Router>
    );
};

export default App;