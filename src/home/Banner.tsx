import React, { useEffect, useState } from 'react';
import GoogleSignIn from '../home/GoogleSignIn';
import '../home-style/home-style.css';

const images = [
  require('../assets/banner.jpg'),
  require('../assets/plato9.jpeg'),
  require('../assets/plato10.jpg'),
  require('../assets/plato3.jpeg'),

];

const Banner: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
  };

  return (
    <section className="banner" style={backgroundStyle}>
      <div>
      </div>
    </section>
  );
};

export default Banner;
