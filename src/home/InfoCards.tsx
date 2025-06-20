import React from 'react';
import '../home-style/home-style.css';

const InfoCards: React.FC = () => {
    return (
        <section className="info-cards-container">
            <div className="info-card">
                <h3>Dirección</h3>
                <p>Carrera 34 # 68B - 32 Barrio Recreo</p>
                <p>Barranquilla, Co 080012</p>
                <p>300 682 24 82</p>
            </div>
            <div className="info-card">
                <h3>Horario</h3>
                <p>Sábado - Domingo - Festivos: 9:00 am - 7:00 pm</p>
            </div>
        </section>
    );
};

export default InfoCards;