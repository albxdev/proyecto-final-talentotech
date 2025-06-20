import React, { useState } from 'react';
import plato5 from '../assets/plato5.jpeg';
import plato3 from '../assets/plato3.jpeg';
import plato7 from '../assets/plato7.jpeg';
import plato1 from '../assets/plato1.jpeg';
import plato4 from '../assets/plato4.jpeg';
import plato9 from '../assets/plato9.jpeg';

import '../menu-style/menu-style.css';

const MenuGrid: React.FC = () => {
  const [favorites, setFavorites] = useState<boolean[]>(new Array(6).fill(false)); // Para marcar como favoritos
  const [cart, setCart] = useState<number[]>([]); // Para manejar los productos en el carrito

  // Función para añadir/quitar un producto del carrito
  const handleAddToCart = (index: number) => {
    setCart((prevCart) => {
      if (prevCart.includes(index)) {
        return prevCart.filter((item) => item !== index); // Eliminar si ya está en el carrito
      }
      return [...prevCart, index]; // Añadir al carrito
    });
  };

  // Función para alternar el corazón (favoritos)
  const handleFavorite = (index: number) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
  };

  const menuItems = [
    { name: 'Bondiola de Cerdo', imageUrl: plato3 },
    { name: 'Sopa de Paticas de Cerdo Ahumada', imageUrl: plato5 },
    { name: 'Picada Familiar', imageUrl: plato7 },
    { name: 'Costillas de Cerdo', imageUrl: plato1 },
    { name: 'Arroz con Chicharrón', imageUrl: plato4 },
    { name: 'Picadas', imageUrl: plato9 }
  ];

  return (
    <div className="menu-grid">
      {menuItems.map((item, index) => (
        <div key={index} className="menu-item">
          <img src={item.imageUrl} alt={item.name} className="menu-image" />
          <h3>{item.name}</h3>
          <div className="menu-actions">
            <button
              className={`favorite-btn ${favorites[index] ? 'favorited' : ''}`}
              onClick={() => handleFavorite(index)}
            >
              {favorites[index] ? '❤️' : '🤍'}
            </button>
            <button
              className={`cart-btn ${cart.includes(index) ? 'in-cart' : ''}`}
              onClick={() => handleAddToCart(index)}
            >
              {cart.includes(index) ? 'En carrito' : 'Añadir al carrito'}
            </button>
            <button className="buy-btn">Comprar</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuGrid;
