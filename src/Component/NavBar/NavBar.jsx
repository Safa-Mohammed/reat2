import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from '../../assets/images/nav/logo.png'

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className={`navbar navbar-expand-lg  navbar-dark ${styles.navbarCustom}`}>
      <div className={`container-fluid ${styles.navbar}`}>
        {/* Left Section - Logo */}
        <img 
            src={logo} 
            alt="Company Logo" 
            className={styles.logoImage}  
          />

        {/* Hamburger Toggle Button */}
        <button
          className={`navbar-toggler ${styles.togglerCustom} bg-dark`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center + Right Sections */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          {/* Center Section - Nav Links */}
          <ul className={`navbar-nav mx-auto mb-2 mb-lg-0 ${styles.navLinks}`}>
            <li className="nav-item">
              <Link
                className={`nav-link text-black ${location.pathname === '/become-a-rental' ? styles.linkActive : ''}`}
                to="/become-a-rental"
              >
                Become a Rental
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-black ${location.pathname === '/rental-deals' ? styles.linkActive : ''}`}
                to="/rental-deals"
              >
                Rental Deals
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-black ${location.pathname === '/how-it-works' ? styles.linkActive : ''}`}
                to="/how-it-works"
              >
                How it Works
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-black ${location.pathname === '/why-choose-us' ? styles.linkActive : ''}`}
                to="/why-choose-us"
              >
                Why Choose Us
              </Link>
            </li>
          </ul>
          <div className=''>
            <a className={styles.customLink}>Sign Up</a>
             <button className={styles.button}>Sign In</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
