import React, { useEffect } from 'react';
import '../home-style/home-style.css';

const InstagramWidget: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.async = true;
        script.onload = () => {
            console.log('Elfsight script cargado');
        };

        document.body.appendChild(script);
    }, []);

    return (
        <div className="instagram-widget">
            {/* Elfsight Instagram Feed | Asados Al Barril */}
            <div className="elfsight-app-a2b90547-089e-4c31-9c1f-6fda33d4fcc8" data-elfsight-app-lazy></div>
        </div>
    );
};

export default InstagramWidget;