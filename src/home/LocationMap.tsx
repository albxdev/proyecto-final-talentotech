import React from 'react';
import '../home-style/home-style.css';


const LocationMap = () => {
    return (
        <section className="location-map-banner">
            <div className="banner-content">
                <div className="map">
                    <iframe
                        title="Ubicación de Asados al Barril en Google Maps"
                        loading="lazy"
                        width="100%"
                        height="400"
                        frameBorder="0"
                        style={{
                            border: 0,
                            borderRadius: '12px',
                            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                            margin: '20px 0'
                        }}
                        src="https://www.google.com/maps/embed/v1/place?q=Asados+al+Barril,+Carrera+34+%23+68B+-+32,+Barranquilla,+Colombia&key=AIzaSyArbsXlFkGGIlb8uWP7kOGRGV2wyr_mzNo"
                        allowFullScreen
                    ></iframe>
                </div>

                <p>
                    <a
                        href="https://goo.gl/maps/qdsuRqVmbFTnAMwv9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="map-link"
                    >
                        Ver en Google Maps
                    </a>
                </p>
            </div>
        </section>
    );
};

export default LocationMap;