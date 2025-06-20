import React from 'react';
import '../home-style/home-style.css';
import corazonIcon from '../assets/corazon.png'; 

const LoveBanner: React.FC = () => {
    return (
        <div className="love-banner">
            Hecho con{' '}
            <img
                src={corazonIcon}  
                alt="Icono de corazón"
                className="heart-icon"
            />{' '}
            por Albx.dev
        </div>
    );
};

export default LoveBanner;