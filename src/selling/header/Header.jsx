import React from 'react';
import styles from './Header.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';

const Header = () => {
    return (
        <>
            <div className={styles.topbar}>
                <div className={styles.wrapper}>
                    <div className={styles.socials}>
                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedinIn />
                    </div>
                    <div className={styles.contact}>
                        <span><FiPhone /> (+1) 234 5678 9101</span>
                        <span><MdEmail className={styles.email} /> shop@yourdomain.com</span>
                    </div>
                </div>
            </div>

            <nav className={styles.navbar}>
                <div className={styles.wrapper}>
                    <div className={styles.logo}>
                        Selling<span className={styles.dot}>.</span>
                    </div>
                    <ul className={styles.navLinks}>
                        <li className={styles.LiHome}>Home</li>
                        <li>Products</li>
                        <li>About Us</li>
                        <li>Special</li>
                        <li>Testimonials</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </nav>

            <section className={styles.hero}>
                <div className={styles.overlay}>
                    <div className={styles.container}>
                        <h1 className={styles.title}>Shop With Us</h1>
                        <p className={styles.subtitle}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam <br />
                            assumenda ea quo cupiditate facere deleniti fuga officia.
                        </p>
                        <div className={styles.buttons}>
                            <button className={styles.shopBtn}>SHOP NOW</button>
                            <button className={styles.clubBtn}>CLUB MEMBERSHIP</button>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default Header;
