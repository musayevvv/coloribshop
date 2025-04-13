import React, { useEffect, useState } from 'react';
import styles from './Product.module.css';
import Cards from '../cards/Cards';
import axios from "axios";

const Product = () => {
  const [db, setDb] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setDb(res.data);
      })
      .catch(err => console.error("API error:", err));
  }, []);

  return (
    <main className={styles.productMain}>
      <div className={styles.container}>

<div className={styles.productTitle}>
  <h2>New Arrivals</h2>
  <div>
    <a href="#">ALL</a>
    <a href="#">WOMEN'S</a>
    <a href="#">ACCESSORİES</a>
    <a href="#">MEN'S</a>
  </div>
</div>

        <div className={styles.productCards}>
          {db.slice(0,10).map(item => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Product;
