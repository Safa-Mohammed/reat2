import React from 'react';
import styles from './Testimonial.module.css';
import user1 from '../../assets/images/landing-page/sec-6/girl.png';  
import user2 from '../../assets/images/landing-page/sec-6/girl.png'; 
import { FaStar } from 'react-icons/fa';

export default function Testimonial() {
  return (
    <div className={`container ${styles.testimonialSection} ${styles.contain} p-3`}>
      <div className={styles.label}>TESTIMONIALS</div>
      <h2 className={styles.title}>Most popular cars rental deals</h2>

      <div className="row g-4">
        {[user1, user2].map((img, i) => (
          <div className="col-md-6" key={i}>
            <div className={styles.cardWrapper}>
              <img src={img} alt="User" className={styles.imagePart} />
              <div className={styles.contentPart}>
                <div className={styles.rating}>5.5 <span className={styles.starsLabel}>stars</span></div>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
                <p className={styles.description}>“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                <div className={styles.author}>Charlie Johnson</div>
                <div className={styles.timestamp}>Last updated 3 mins ago</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
