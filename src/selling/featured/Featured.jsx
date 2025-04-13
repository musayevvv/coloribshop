import React from 'react';
import styles from './Featured.module.css';

const Featured = () => {
    return (
        <>
            <main>
                <div className={styles.container}>
                    <div className={styles.overlay}>
                        <h2 className={styles.title}>Get notified on each update.</h2>
                        <div className={styles.form}>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className={styles.input}
                            />
                            <button className={styles.subscribeBtn}>SUBSCRIBE</button>
                        </div>
                        <p className={styles.description}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Fugiat commodi veniam doloremque ducimus tempora.
                        </p>
                    </div>
                </div>
            </main>

            <section className={styles.featuredSection}>
                <div className={styles.topText}>
                    <p className={styles.smallTitle}>AWESOME PRODUCTS</p>
                    <h2 className={styles.mainTitle}>Featured Products</h2>
                    <p className={styles.topDesc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.
                    </p>
                </div>

                {[1, 2].map((item, index) => (
                    <div
                        className={`${styles.productWrapper} ${index === 1 ? styles.reverse : ''}`}
                        key={index}
                    >
                        <div className={styles.imageWrapper}>
                            <img
                                src={
                                    index === 0
                                        ? "https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg"
                                        : "https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg"
                                }
                                alt="Product"
                                className={styles.productImage}
                            />
                        </div>
                        <div className={styles.content}>
                            <h3>About This Product</h3>
                            <p>
                                Et tempora id nostrum saepe amet doloribus deserunt <br />
                                totam officiis cupiditate asperiores quasi accusantium voluptatum dolorem quae sapiente voluptatem ratione <br />
                                odio iure blanditiis earum fuga molestiae alias dicta perferendis inventore!
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus soluta assumenda sed optio, error at?
                            </p>
                            <div className={styles.price}>
                                <span className={styles.oldPrice}>$269.00</span>
                                <span className={styles.newPrice}>$69.00</span>
                            </div>
                            <div className={styles.buttons}>
                                <button className={styles.btnOutline}>VIEW DETAILS</button>
                                <button className={styles.btnFilled}>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            <section className={styles.aboutSection}>
                <div className={styles.aboutContainer}>
                    <div className={styles.imageSection}>
                        <img
                            src="https://preview.colorlib.com/theme/selling/images/about_1.jpg"
                            alt="Woman in office"
                            className={styles.image}
                        />
                        <div className={styles.overlayText}>
                            <span>Trusted Merchant</span>
                            <p>FOR 50 YEARS</p>
                        </div>
                    </div>
                    <div className={styles.textSection}>
                        <span className={styles.company}>MERCHANT COMPANY</span>
                        <h2>About Us</h2>
                        <p>
                            Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Qui <br /> fuga
                            ipsa, repellat blanditiis nihil, <br /> consectetur. Consequuntur eum <br />
                            inventore, rem maxime, nisi <br /> excepturi ipsam libero ratione  <br />adipisci
                            alias eius vero vel!
                        </p>
                        <button className={styles.learnMoreBtn}>LEARN MORE</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Featured;
