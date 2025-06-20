import React from "react";
import '../home-style/home-style.css';


const LocationBanner: React.FC = () => {
  return (
    <section className="bannertotal location-banner">
      <div className="banner-content">
        <h2>Nuestra ubicación</h2>
        <p>Descubre dónde estamos ubicados y visítanos.</p>
      </div>
    </section>
  );
};

export default LocationBanner;
