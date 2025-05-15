import React from "react";
import { Form, Button } from "react-bootstrap";
import styles from "./RentCarsForm.module.css";
import googlePlay from "../../assets/images/landing-page/andriod.png";
import appStore from "../../assets/images/landing-page/ios.png";
import phoneMockup from "../../assets/images/landing-page/sec-7/iPhone-14.png"; // Add your phone image here

const RentCarsForm = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftPanel}>
                <div className={styles.heading}>
                    Download Rentcars App for <span className={styles.free}>FREE</span>
                </div>
                <div className={styles.subheading}>
                    For faster, easier booking and exclusive deals.
                </div>

                <div className={styles.downloadButtons}>
                    <img src={googlePlay} alt="Google Play" />
                    <img src={appStore} alt="App Store" />
                </div>

                <Form>
                    <Form.Group className={styles.formGroup}>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group className={styles.formGroup}>
                        <Form.Control type="tel" placeholder="Phone Number" />
                    </Form.Group>
                    <Form.Group className={styles.formGroup}>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <div
                        className={`d-flex justify-content-center align-items-center ${styles.formBtn}`}

                    >
                        <Button className={styles.sendButton} type="submit">
                            Send
                        </Button>
                    </div>

                </Form>
            </div>

            <div className={styles.rightPanel}>
                <img src={phoneMockup} alt="App preview" className="w-75" />
            </div>
        </div>
    );
};

export default RentCarsForm;
