import React from 'react';
import '../home-style/home-style.css';

const LogoBanner: React.FC = () => {
    return (
        <section className="banner-logo-item">
            <div className="banner-logo">
                <img src="./imagenes/logo.png" alt="Logo Asados al Barril" className="logo" />
            </div>
        </section>
    );
};

export default LogoBanner;