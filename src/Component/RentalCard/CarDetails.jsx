// CarDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import carData from './carsData.json';
import styles from './CarDetails.module.css';
import door from '../../assets/images/card/doors.png';
import passengers from '../../assets/images/card/user.png';
import air from '../../assets/images/card/d8wxke_2_.png';
import auto from '../../assets/images/card/Frame.png';

import car1 from '../../assets/images/landing-page/car1.png';
// Add other images like car2, car3, etc. if needed

const imageMap = {
  "car1.png": car1,
  // Add the rest if needed
};

const CarDetails = () => {
  const { id } = useParams();
  const car = carData.find(c => c && c.id?.toString() === id);

  if (!car) {
    return <div style={{ padding: "20px" }}><h2>Car not found</h2></div>;
  }

  const imageSrc = imageMap[car.image] || '';

  return (
    <div className={styles.descDeatils}>
      <div className={styles.img}><img src={imageSrc} alt={car.name} className='w-100' /></div>
      <div className={styles.carData}>
          <h2 className={styles.title}>All Available Vehicles</h2>
              <h4 className={styles.sectionSubtitle}>Most popular car rental deals</h4>
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
                  
      </div>
    </div>
  );
};

export default CarDetails;
