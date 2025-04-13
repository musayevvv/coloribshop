import React from 'react';
import styles from './Cards.module.css';

const Cards = ({ item }) => {
  return (
    <>
      <div className={styles.cameraCard}>
        <img
          src={item.image}
          alt={item.title}
          className={styles.cameraImage}
        />
        <h2 className={styles.cameraTitle}>{item.title}</h2>
        <p className={styles.cameraPrice}>{item.price} $</p>
        <button className={styles.addToCartBtn}>ADD TO CART</button>
      </div>
    </>

  );
};

export default Cards;
