import React from 'react';

// Estilos globales
import '../menu-style/menu-style.css';

// Componentes principales
import MainContent from '../Menu/MainContent';
import Footer from '../Menu/Footer';
import MenuGrid from '../Menu/MenuGrid';



// Banners
import Banner from '../Menu/Banner';
import FinalBanner from '../Menu/FinalBanner';
import LoveBanner from '../Menu/LoveBanner';
import MenuBanner from '../Menu/MenuBanner';



const Menu: React.FC = () => {
    return (
        <div>
            <MainContent />
            <Banner />
            <MenuBanner />
            <MenuGrid />
            <LoveBanner />
            <FinalBanner />
            <Footer />
        </div>
    );
};

export default Menu;