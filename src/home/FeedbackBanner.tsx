import React from 'react';
import '../home-style/home-style.css';


const FeedbackBanner: React.FC = () => {
    return (
        <section className="bannertotal feedback-banner">
            <div className="banner-content">
                <h2>¿Te gustó? ¡Déjanos saber!</h2>
                <p>Deja tu comentario y comparte tu experiencia con nosotros.</p>
            </div>
        </section>
    );
};

export default FeedbackBanner;