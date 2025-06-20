import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import cateringImg from '../assets/catering.png';
import barrilImg from '../assets/barril.png';
import menuImg from '../assets/menu.png';
import ordenarImg from '../assets/ordenar.png';
import '../home-style/home-style.css';

const MainContent: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section id="main-content">
            <div id="div1">
                <div id="asado1"></div>
                <div id="asado2"></div>
                <div id="asado3"></div>
                <div id="asado4"></div>
                <div id="asado5"></div>
                <div id="asado6"></div>
                <div id="asado7"></div>
                <div id="asado8"></div>
                <div id="asado9"></div>
                <div id="asado10"></div>
            

            {/* Barra de Navegación */}
            <div id="div2" className="hidden md:flex flex-col items-center">
            {/* Iconos y botones */}
                <div id="home">
                <Link to="/catering"> <img id="img1" src={cateringImg} alt="Catering" /> </Link> <div id="home1">                        <input id="boton1" type="button" value="Inicio" />
                        <input id="boton2" type="button" value="Perfil" />
                        <input id="boton3" type="button" value="Más" />
                        <img id="img2" src={barrilImg} alt="Barril" />
                        <div id="homee1"></div>
                    </div>

                    <div id="menu">
                        <img id="img3" src={menuImg} alt="Menú" />
                        <div id="menu1"></div>
                {/* ✅ Botón que navega a /menu al hacer clic */}
                <input
                id="boton4"
                type="button"
                value="Asados"
                onClick={() => navigate("/menu")} />                        
                <input id="boton5" type="button" value="Picadas" />
                    </div>

                    <div id="ordenar">
                        <img id="img4" src={ordenarImg} alt="Ordenar" />
                        <div id="ordenar1"></div>
                        <div id="ordenar2"></div>
                        <input id="boton7" type="button" value="On-Line" />
                        <input id="boton8" type="button" value="Programado" />
                        <input id="boton9" type="button" value="Servicio" />
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default MainContent;