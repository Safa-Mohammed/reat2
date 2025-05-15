import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RentalCard from './RentalCard';
import styles from './CarList.module.css';
import carData from './carsData.json';

import car1 from '../../assets/images/landing-page/car1.png';

const imageMap = {
  "car1.png": car1
};

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    const enrichedCars = carData.slice(0, 4).map(car => ({
      ...car,
      image: imageMap[car.image] || null
    }));
    setCars(enrichedCars);
    setFilteredCars(enrichedCars);
  }, []);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const results = cars.filter(car =>
      car.name.toLowerCase().includes(query)
    );
    setFilteredCars(results);
  }, [searchQuery, cars]);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Most Popular Cars</h2>
      <h4 className={styles.sectionSubtitle}>Most popular car rental deals</h4>

<div className={styles.searchContainer}>
  <input
    type="text"
    placeholder="Search By Name"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className={styles.searchInput}
  />
  <button className={styles.searchButton}>Search</button>
</div>


      <div className={styles.grid}>
        {filteredCars.map((car, index) => (
          <RentalCard key={index} car={car} />
        ))}
      </div>

      <Link to="/allcar" className={styles.showMore}>Show all vehicles</Link>
    </div>
  );
};

export default CarList;
