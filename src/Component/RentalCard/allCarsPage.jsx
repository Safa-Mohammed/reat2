// AllCar.js
import   { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RentalCard from './RentalCard';
import styles from './CarList.module.css';
import carData from './carsData.json';
import car1 from '../../assets/images/landing-page/car1.png';
 

const imageMap = {
  "car1.png": car1
};


const ITEMS_PER_PAGE = 8;

const AllCar = () => {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);


useEffect(() => {
  const mappedData = carData.map(car => ({
    ...car,
    image: imageMap[car.image] || null
  }));
  setCars(mappedData);
}, []);

  const totalPages = Math.ceil(cars.length / ITEMS_PER_PAGE);

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return cars.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* Breadcrumb with Home link */}
      <div className={styles.breadcrumb}>
        <Link to="/" className={styles.breadcrumbLink}>Home</Link> / Cars
      </div>

      <h2 className={styles.title}>All Available Vehicles</h2>
      <h4 className={styles.sectionSubtitle}>Most popular car rental deals</h4>

      <div className={styles.grid}>
        {getPaginatedData().map((car, index) => (
          <RentalCard key={index} car={car} />
        ))}
      </div>

      <div className={styles.pagination}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={styles.pageButton}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`${styles.pageButton} ${
              currentPage === index + 1 ? styles.activePage : ''
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={styles.pageButton}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllCar;
