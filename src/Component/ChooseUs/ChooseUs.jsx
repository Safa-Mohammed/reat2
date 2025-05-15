import React from 'react';
import styles from './ChooseUs.module.css';
import { FaLock, FaUserTie, FaClock, FaHeadset } from 'react-icons/fa';
import carImg from '../../assets/images/landing-page/sec-5/Audi 1.png'; 

export default function ChooseUs() {
  return (
    <div className={` ${styles.chooseUsSection} p-0`}>
      <div className="row align-items-center">
        <div className={`col-md-5 ${styles.chooseUsImage}`}>
          <img src={carImg} alt="Luxury car" className={styles.carImage} />
        </div>
        <div className="col-md-7 py-2">
          <div className={styles.label}>WHY CHOOSE US</div>
          <h2 className={styles.sectionTitle}>
            We offer the best experience with our rental deals
          </h2>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}><FaLock /></div>
            <div>
              <div className={styles.highlightText}>Best price guaranteed</div>
              <div className={styles.descriptionText}>
                Find a lower price? We'll refund you 100% of the difference.
              </div>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}><FaUserTie /></div>
            <div>
              <div className={styles.highlightText}>Experience driver</div>
              <div className={styles.descriptionText}>
                Don't have driver? Don't worry, we have many experienced drivers for you.
              </div>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}><FaClock /></div>
            <div>
              <div className={styles.highlightText}>24 hour car delivery</div>
              <div className={styles.descriptionText}>
                Book your car anytime and we will deliver it directly to you.
              </div>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}><FaHeadset /></div>
            <div>
              <div className={styles.highlightText}>24/7 technical support</div>
              <div className={styles.descriptionText}>
                Have a question? Contact Rentcars support any time when you have a problem.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
