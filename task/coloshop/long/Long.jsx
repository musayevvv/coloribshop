import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaSkype, FaPinterest } from 'react-icons/fa'; // Importing React Icons
import styles from './Long.module.css';

const Long = () => {
    return (
        <>
            <main className={styles.productMain}>
                <div className={styles.container}>
                    <div className={styles.productTitle}>
                        <h2>Latest Blogs</h2>
                    </div>

                    <div className={styles.blogsGrid}>
                        <img
                            src="https://preview.colorlib.com/theme/coloshop/images/blog_1.jpg"
                            alt="Blog 1"
                        />
                        <img
                            src="https://preview.colorlib.com/theme/coloshop/images/blog_2.jpg"
                            alt="Blog 2"
                        />
                        <img
                            src="https://preview.colorlib.com/theme/coloshop/images/blog_3.jpg"
                            alt="Blog 3"
                        />
                    </div>
                </div>
            </main>


            <div className={styles.newsletter}>
                <div className={styles.container}>
                    <div className={styles.newsletterBox}>
                        <div className={styles.newsletterText}>
                            <h3>Newsletter</h3>
                            <p>
                                Subscribe to our newsletter and get 20% off your first purchase
                            </p>
                        </div>
                        <div className={styles.newsletterInput}>
                            <input type="email" placeholder="Your email" />
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>

            <footer className={styles.footer}>
                <div className={styles.container}>
                    <div className={styles.foot}>
                        <div className={styles.footerLinks}>
                            <a href="/">Blog</a>
                            <a href="/">FAQs</a>
                            <a href="/">Contact us</a>
                        </div>

                        <div className={styles.footerIcons}>
                            <FaFacebookF />
                            <FaTwitter />
                            <FaInstagram />
                            <FaSkype />
                            <FaPinterest />
                        </div>
                    </div>
                    <p className={styles.footerNote}>
                        ©2018 All Rights Reserved. This template is made with ❤️ by{" "}
                        <a href="https://colorlib.com">Colorlib</a>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Long;
