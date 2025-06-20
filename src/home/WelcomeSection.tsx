import React from 'react';
import '../home-style/home-style.css';


const WelcomeSection: React.FC = () => {
    return (
        <section className="welcome">
            <div>
                <h1>Bienvenidos a Asados al Barril</h1>
                <p>
                    Ubicado en la frontera del barrio Recreo y Olaya, Asados al Barril se ha erigido 
                    como futuro campeón del asado al barril con roble y nogal lleno de sabor. Nuestra 
                    reputación nos ha convertido en el favorito de muchos, nuestro restaurante informal 
                    y acogedor se ha ganado su lugar como una verdadera joya entre los entusiastas de los asados al barril.
                </p>
                <a href="sobrenosotros.html" className="btn">
                    APRENDE MÁS SOBRE NOSOTROS
                </a>
            </div>
        </section>
    );
};

export default WelcomeSection;