import '../home-style/home-style.css';
import { Link } from 'react-router-dom';

// Importar las imágenes
import whatsappIcon from '../assets/whatsapp.png';
import facebookIcon from '../assets/facebook.svg';
import gmailIcon from '../assets/gmail.svg';
import instagramIcon from '../assets/instagram.svg';
import logo from '../assets/logo.png';
import gmailGif from '../assets/gmail.gif';
import instagramGif from '../assets/instagram.gif';


const BannerFinal: React.FC = () => {
  return (
    <section className="banner-final">
      <div className="banner-item">
        <div className="reservas-container">
          <Link to="/catering" className="reservas-btn">Reservas</Link>
        </div>
        <div className="banner-contact">
          <p>+57 300 682 24 82</p>
          <p>
            <a
              href="https://wa.me/573006822482"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat via WhatsApp"
            >
              <img src={whatsappIcon} alt="WhatsApp logo" />
            </a>
          </p>
        </div>
      </div>

      <div className="banner-address-info">
        <div className="address-info">
          <h3>Dirección:</h3>
          <p>Carrera 34 # 68B - 32</p>
          <p>Barranquilla, Co 080012</p>
        </div>
      </div>

      <div className="mobile-social-icons">
        <a href="https://www.instagram.com/asados_al_barril_" target="_blank" aria-label="Instagram">
          <img src={instagramGif} alt="Instagram" />
        </a>
        <a href="mailto:asadosalbarril4@gmail.com" aria-label="Correo">
          <img src={gmailGif} alt="Gmail" />
        </a>
      </div>

      <div className="phone-container">
        <div className="phone">
          <input type="radio" name="s" id="s1" />
          <input type="radio" name="s" id="s2" defaultChecked />
          <input type="radio" name="s" id="s3" />

          <label
            htmlFor="s1"
            className="phone-label"
            onClick={() => window.open("https://www.facebook.com/", "_blank")}
          >
            <img src={facebookIcon} alt="Facebook logo" />
          </label>

          <label
            htmlFor="s2"
            className="phone-label"
            onClick={() => window.open("mailto:asadosalbarril4@gmail.com", "_self")}
          >
            <img src={gmailIcon} alt="Gmail logo" />
          </label>

          <label
            htmlFor="s3"
            className="phone-label"
            onClick={() => window.open("https://www.instagram.com/asados_al_barril_", "_blank")}
          >
            <img src={instagramIcon} alt="Instagram logo" />
          </label>

          <div className="circle"></div>
          <div className="phone_content">
            <div className="phone_bottom">
              <span className="indicator"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-social">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src={facebookIcon} alt="Facebook logo" />
        </a>
        <a
          href="mailto:asadosalbarril4@gmail.com"
          className="social-link"
        >
          <img src={gmailIcon} alt="Gmail logo" />
        </a>
        <a
          href="https://www.instagram.com/asados_al_barril_"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src={instagramIcon} alt="Instagram logo" />
        </a>
      </div>

      <div className="banner-logo-item">
        <div className="banner-logo">
          <img
            src={logo}
            alt="Logo Asados al Barril"
            className="logo"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerFinal;