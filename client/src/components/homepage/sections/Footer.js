import React from 'react';
import styles from "../styles/Footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className={styles.footerContainer} style={{ height: "260px", marginTop: "70px", boxShadow: "none" }}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.links}>
                        <p>BLOG</p>
                        <p>FAQs</p>
                        <p>Contact Us</p>
                    </div>
                    <div>
                        <FaFacebookF className={styles.icons} />
                        <FaTwitter className={styles.icons} />
                        <FaInstagram className={styles.icons} />
                    </div>
                </div>
            </div>
        </div>
    )
}
