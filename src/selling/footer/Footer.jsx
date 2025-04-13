import React from 'react';
import styles from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.column}>
          <h4>ABOUT US</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
        </div>
        <div className={styles.column}>
          <h4>QUICK LINKS</h4>
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Testimonials</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>FOLLOW US</h4>
          <div className={styles.socialIcons}>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
        <div className={styles.column}>
          <h4>FEATURED PRODUCT</h4>
          <img
            src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg.webp"
            alt="Leather Brown Shoe"
            className={styles.productImage}
          />
          <p>Leather Brown Shoe</p>
          <p className={styles.price}>$60.00</p>
          <button className={styles.cartButton}>ADD TO CART</button>
        </div>
      </div>
      <div className={styles.footer}>

  <div className={styles.footerCopyright}>
    Copyright ©2025 All rights reserved | This template is made with ♥ by Colorlib
  </div>
</div>

    </footer>
  );
};

export default Footer;