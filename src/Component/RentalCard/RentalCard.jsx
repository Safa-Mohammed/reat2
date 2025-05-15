import React from 'react';
import styles from './CarList.module.css';  
import door from '../../assets/images/card/doors.png';
import passengers from '../../assets/images/card/user.png';
import air from '../../assets/images/card/d8wxke_2_.png';
import auto from '../../assets/images/card/Frame.png';
import { Link } from 'react-router-dom';

const RentalCard = ({ car }) => {
  if (!car) return null;

  return (
    <Link to={`/allcar/${car.id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <img src={car.image} alt={car.name} className={styles.image} />
        <h3 className={styles.nameCar}>{car.name}</h3>
        <p className={styles.rating}>
          ⭐<span className={styles.ratingValue}> {car.rating}</span>
          <span className={styles.ratingdReview}>({car.reviews} reviews)</span>
        </p>

        <ul className={styles.features}>
          <li>
            <img src={passengers} alt="Passengers" className={styles.icon} />
            {car.passengers} Passengers
          </li>
          <li>
            <img src={auto} alt="Transmission" className={styles.icon} />
            {car.transmission}
          </li>
          <li>
            <img src={air} alt="Air Conditioning" className={styles.icon} />
            Air Conditioning
          </li>
          <li>
            <img src={door} alt="Doors" className={styles.icon} />
            {car.doors} Doors
          </li>
        </ul>

        <div className={styles.sectionPrice}>
          <div className={styles.priceRow}>
            <span className={styles.priceWord}>Price</span>
               <span className={styles.priceData}>
      ${car.price} <span className={styles.priceDay}>/day</span>
    </span>    
          </div>
        </div>

        <button className={styles.button}>Rent Now →</button>
      </div>
    </Link>
  );
};

export default RentalCard;
