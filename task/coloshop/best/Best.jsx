import React, { useEffect, useState } from 'react';
import { FaTruck ,FaMoneyBillAlt ,FaUndo ,FaRegClock } from "react-icons/fa";
import styles from './Best.module.css'
import Cards from '../cards/Cards';
import axios from "axios";

const Best = () => {
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
                    <h2>Best Sellers</h2>
                </div>
                <div className={styles.productCards}>
                    {db.slice(14, 19).map(item => (
                        <Cards key={item.id} item={item} />
                    ))}
                </div>

                <div className={styles.cargoBox}>
                <div className={styles.container}>
                    <div className={styles.cargoAbout}>
                        <div className={styles.icons}><FaTruck /></div>
                        <div className={styles.cargoText}>
                            <h6>FREE SHIPPING</h6>
                            <p>Suffered Alteration in Some Form</p>
                        </div>
                    </div>

                    <div className={styles.cargoAbout}>
                        <div className={styles.icons}><FaMoneyBillAlt /></div>
                        <div className={styles.cargoText}>
                            <h6>cach on delivery</h6>
                            <p>The Internet Tend To Repeat</p>
                        </div>
                    </div>

                    <div className={styles.cargoAbout}>
                        <div className={styles.icons}><FaUndo /></div>
                        <div className={styles.cargoText}>
                            <h6>45 days return</h6>
                            <p>Making it Look Like Readable</p>
                        </div>
                    </div>

                    <div className={styles.cargoAbout}>
                        <div className={styles.icons}><FaRegClock /></div>
                        <div className={styles.cargoText}>
                            <h6>opening all week</h6>
                            <p>8AM - 09PM</p>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Best;





