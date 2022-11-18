import React from 'react';
import styles from "../styles/Navbar.module.css";
import logo from "../../../assets/images/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
    return (
        <div className={styles.navContainer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div>
                        <img className={styles.logo} src={logo} alt="logo"/>
                    </div>
                    <div className={styles.links}>
                        <p>HOME</p>
                        <p>SHOP</p>
                        <p>PROMOTION</p>
                        <p>PAGES</p>
                        <p>BLOG</p>
                        <p>CONTACT</p>
                        <FaSearch className={styles.icons} />
                        <BsFillPersonFill className={styles.icons}/>
                        <span className={styles.iconContainer}>
                            <FaShoppingCart className={styles.icons} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
