import React from 'react';
import styles from './Work.module.css';
import jaguarLogo from './../../assets/images/landing-page/jaguar.png';
import nissanLogo from './../../assets/images/landing-page/nissan.png';
import volvoLogo from './../../assets/images/landing-page/volvo.png';
import acLogo from './../../assets/images/landing-page/ac.png';

export default function Work() {
  return (
    <section className={styles.workSection}>
      <div className="container">
        {/* Title Section */}
        <div className="row">
          <div className="col-12">
            <h2 className={`${styles.sectionTitle}`}>HOW IT WORKS</h2>
            <p className={styles.sectionSubtitle}>Rent with following 3 working steps</p>
          </div>
        </div>

        {/* Steps Section */}
        <div className="row">
          {/* Step 1 */}
          <div className="col-md-4">
            <div className={styles.workStep}>
              <div className={styles.stepIcon}>
                <i className={`bi bi-geo-alt-fill py-3 px-4 ${styles.icons}`}></i>
              </div>
              <h4 className={styles.stepTitle}>Choose location</h4>
              <p className={styles.stepDescription}>
                Choose your location and find your best car
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-md-4">
            <div className={styles.workStep}>
              <div className={styles.stepIcon}>
                <i className={`bi bi-calendar-check-fill py-3 px-4 ${styles.icons}`}></i>
              </div>
              <h4 className={styles.stepTitle}>Pick-up date</h4>
              <p className={styles.stepDescription}>
                Select your pick up date and time to book your car
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-md-4">
            <div className={styles.workStep}>
              <div className={styles.stepIcon}>
                <i className={`bi bi-car-front-fill py-3 px-4 ${styles.icons}`}></i>
              </div>
              <h4 className={styles.stepTitle}>Book your car</h4>
              <p className={styles.stepDescription}>
                Book your car and we will deliver it directly to you
              </p>
            </div>
          </div>
        </div>

        {/* Logos Section */}
        <div className="row mt-5 justify-content-center">
          
          <div className="col-6 col-md-3 col-lg-3 mb-4">
            <div className={`${styles.logoContainer} ${styles.animateFloat}`}>
              <img 
                src={jaguarLogo} 
                alt="Jaguar Logo" 
                className={`img-fluid ${styles.logoImg}`}
              />
            </div>
          </div>
          
          <div className="col-6 col-md-3 col-lg-3 mb-4">
            <div className={`${styles.logoContainer} ${styles.animatePulse}`}>
              <img 
                src={nissanLogo} 
                alt="Nissan Logo" 
                className={`img-fluid ${styles.logoImg}`}
              />
            </div>
          </div>
          
          <div className="col-6 col-md-3 col-lg-3 mb-4">
            <div className={`${styles.logoContainer} ${styles.animatePulse}`}>
              <img 
                src={acLogo} 
                alt="AC Logo" 
                className={`img-fluid ${styles.logoImg}`}
              />
            </div>
          </div>
          
          <div className="col-6 col-md-3 col-lg-3 mb-4">
            <div className={`${styles.logoContainer} ${styles.animateSpin}`}>
              <img 
                src={volvoLogo} 
                alt="Volvo Logo" 
                className={`img-fluid ${styles.logoImg}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}