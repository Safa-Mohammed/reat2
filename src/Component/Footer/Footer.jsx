import React from 'react';
import styles from './Footer.module.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../assets/images/footer/logo-footer.png'
import imgInsta from '../../assets/images/footer/instagram.png'
import imgFacebook from '../../assets/images/footer/facebook.png'
import imgYoutube from '../../assets/images/footer/youtube.png'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
            <img src={logo} alt="Rentcars Logo" className={styles.logo} />
          <p><FaMapMarkerAlt /> 25566 Hc 1, Glenallen, Alaska, 99588, USA</p>
          <p><FaPhone /> +603 4784 273 12</p>
          <p><FaEnvelope /> rentcars@gmail.com</p>
        </div>

        <div className={styles.column}>
          <h4>Our Product</h4>
          <ul>
            <li>Career</li>
            <li>Car</li>
            <li>Packages</li>
            <li>Features</li>
            <li>Priceline</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Resources</h4>
          <ul>
            <li>Download</li>
            <li>Help Centre</li>
            <li>Guides</li>
            <li>Partner Network</li>
            <li>Cruises</li>
            <li>Developer</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>About Rentcars</h4>
          <ul>
            <li>Why choose us</li>
            <li>Our Story</li>
            <li>Investor Relations</li>
            <li>Press Center</li>
            <li>Advertise</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Follow Us</h4>
          <div className={styles.socials}>
            <img src={imgFacebook } />
            <img src={imgInsta} />
            <img src={imgYoutube } />
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <hr />
        <p>Copyright 2023 • Rentcars, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
