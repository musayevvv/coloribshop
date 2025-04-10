import React from 'react';
import styles from './Header.module.css';
import { FaUser, FaSearch, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <>
      <nav>
        <div className={styles.container}>
          <div className={styles.leftDiv}>
            Free shipping on all U.S. orders over $50
          </div>
          <div className={styles.rightDiv}>
            <a href="#">USD</a>
            <a className={styles.eng} href="#">ENGLISH</a>
            <a href="#">My Account</a>
          </div>
        </div>
      </nav>

      <header>
        <div className={styles.container}>
          <div className={styles.logo}>
            COLO <span>SHOP</span>
          </div>
          <div className={styles.navbar}>
            <div className={styles.pages}>
              <a href="#">HOME</a>
              <a href="#">SHOP</a>
              <a href="#">PROMOTION</a>
              <a href="#">PAGES</a>
              <a href="#">BLOG</a>
              <a href="#">CONTACT</a>
            </div>
            <div className={styles.iconBox}>
              <a href="#" className={styles.icon}><FaSearch /></a>
              <a href="#" className={styles.icon}><FaUser /></a>
              <a href="#" className={styles.icon}><FaShoppingCart /></a>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.reclam}>
        <div className={styles.back}>
          <div className={styles.container}>
            <div className={styles.collection}>
              <h6>Spring / Summer Collection 2017</h6>
              <h1>Get up to 30% Off New Arrivals</h1>
              <button>SHOP NOW</button>
            </div>
          </div>
        </div>
      </main>

      <section className={styles.bannerSection}>
        <div className={styles.container}>
          <div className={styles.banner}>
            <div className={styles.bannerCard} style={{ backgroundImage: 'url(https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg)' }}>
              <div className={styles.bannerCenter}>WOMEN'S</div>
            </div>
            <div className={styles.bannerCard} style={{ backgroundImage: 'url(https://preview.colorlib.com/theme/coloshop/images/banner_2.jpg)' }}>
              <div className={styles.bannerCenter}>ACCESSORIES</div>
            </div>
            <div className={styles.bannerCard} style={{ backgroundImage: 'url(https://preview.colorlib.com/theme/coloshop/images/banner_3.jpg)' }}>
              <div className={styles.bannerCenter}>MEN'S</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
