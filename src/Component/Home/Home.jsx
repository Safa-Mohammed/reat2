import React from "react";
import styles from "./Home.module.css";
import carImage from "../../assets/images/landing-page/car 2 1.png";
import googlePlay from "../../assets/images/landing-page/andriod.png";
import appStore from "../../assets/images/landing-page/ios.png";
import NavBar from "../NavBar/NavBar";

const Home = () => {
  return (
    <div className={`  ${styles.heroSection}`}>
      <NavBar />
      <div className="row align-items-center p-5">
        {/* Text Section */}
        <div className={`col-md-6 text-center text-md-start  ${styles.textHero} `}>
          <h1 className={styles.heroTitle}>
            Find, book and <br /> rent a car{" "}
            <span className={styles.highlight}>Easily</span>
          </h1>
          <p className={styles.subText}>
            Get a car wherever and whenever you need it with your iOS and
            Android device.
          </p>
          <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
            <img
              src={googlePlay}
              alt="Google Play"
              className={styles.storeBadge} 
            />
            <img src={appStore} alt="App Store" className={styles.storeBadge} />
          </div>
        </div>

        {/* Image Section */}
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img
            src={carImage}
            alt="Blue Sports Car"
            className={`${styles.carImage} `}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
