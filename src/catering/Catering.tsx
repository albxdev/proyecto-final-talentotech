import React, { useEffect } from 'react';

// Estilos globales
import '../catering-style/catering-style.css';

// Componentes principales
import MainContent from '../catering/MainContent';
import Footer from '../catering/Footer';

// Banners
import Banner from '../catering/Banner';
import BannerFinal from '../catering/FinalBanner';
import LoveBanner from '../catering/LoveBanner';
import BannerTotal from '../catering/BannerTotal';

import CateringForms from '../catering/CateringForms';



const Catering: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Esto lleva la página al inicio al cargarse
      }, []);

    return (
        <div>
            <MainContent />
            <Banner />
            <BannerTotal />
            <CateringForms />        
            <LoveBanner />
            <BannerFinal />
            <Footer />
        </div>
    );
};

export default Catering;