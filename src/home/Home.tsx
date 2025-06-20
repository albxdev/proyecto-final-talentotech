import React from 'react';

// Estilos globales
import '../home-style/home-style.css';

// Componentes principales
import MainContent from '../home/MainContent';
import Welcome from '../home/WelcomeSection';
import Footer from '../home/Footer';

// Secciones informativas
import InfoCards from '../home/InfoCards';
import LocationBanner from '../home/LocationBanner';

import LocationMap from '../home/LocationMap';

// Componentes visuales adicionales
import Gallery from '../home/GallerySection';
import ReviewsSection from '../home/ReviewsSection';
import Comments from '../home/FeedbackBanner';

// Elementos de interacción social
import RedesBanner from '../home/RedesBanner';
import InstagramWidget from '../home/InstagramWidget';

// Banners
import Banner from '../home/Banner';
import FinalBanner from '../home/FinalBanner';
import LoveBanner from '../home/LoveBanner';
import GoogleSignIn from '../home/GoogleSignIn';


const Home: React.FC = () => {
    return (
        <div>
            <MainContent />
            <Banner />
            <GoogleSignIn />
            <Welcome />
            <Gallery />
            <RedesBanner />
            <InstagramWidget />
            <Comments />
            <ReviewsSection />
            <LocationBanner />
            <InfoCards />
            <LocationMap />
            <LoveBanner />
            <FinalBanner />
            <Footer />
        </div>
    );
};

export default Home;