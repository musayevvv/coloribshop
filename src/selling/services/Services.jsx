
import React from 'react';
import styles from './Services.module.css';
import { FaChartPie, FaTimes, FaPalette, FaCheck, FaBriefcase, FaCloud } from 'react-icons/fa';

const services = [
    { icon: <FaChartPie />, title: 'Business Consulting' },
    { icon: <FaTimes />, title: 'Market Analysis' },
    { icon: <FaPalette />, title: 'User Monitoring' },
    { icon: <FaCheck />, title: 'Seller Consulting' },
    { icon: <FaBriefcase />, title: 'Financial Investment' },
    { icon: <FaCloud />, title: 'Financial Management' },
];

const Services = () => {


    const posts = [
        {
            image: 'https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg',
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            author: 'Ham Brook',
            date: 'Jan 18, 2019',
            category: 'News',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.',
        },
        {
            image: 'https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg',
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            author: 'James Phelps',
            date: 'Jan 18, 2019',
            category: 'News',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.',
        },
        {
            image: 'https://preview.colorlib.com/theme/selling/images/model_5_bg.jpg',
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            author: 'James Phelps',
            date: 'Jan 18, 2019',
            category: 'News',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.',
        },
    ];
    return (
        <>
            <section className={styles.servicesSection}>
                <p className={styles.subHeading}>OUR SERVICES</p>
                <h2 className={styles.heading}>We Offer Services</h2>
                <div className={styles.cardsContainer}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardContent}>
                                <div className={styles.icon}>{service.icon}</div>
                                <div className={styles.textContent}>
                                    <h3 className={styles.title}>{service.title}</h3>
                                    <p className={styles.desc}>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />
                                        Perferendis quis molestiae vitae eligendi at.
                                    </p>
                                    <a href="#" className={styles.learnMore}>Learn More</a>
                                </div>
                            </div>
                        </div>


                    ))}
                </div>
            </section>
            <section className={styles.testimonialSection}>
                <p className={styles.subheading}>PEOPLE SAYS</p>
                <h2 className={styles.heading}>Testimonials</h2>

                <img
                    src="https://preview.colorlib.com/theme/selling/images/person_3.jpg.webp"
                    alt="John Smith"
                    className={styles.avatar}
                />

                <p className={styles.quote}>
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
                    unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi
                    minima fuga beatae illum eligendi incidunt consequatur. Amet dolores
                    excepturi earum unde iusto.”
                </p>
                <p className={styles.author}>John Smith</p>
            </section>



            <section className={styles.blogSection}>
                <p className={styles.subHeading}>BLOG</p>
                <h2 className={styles.heading}>Blog Posts</h2>
                <div className={styles.cardContainer}>
                    {posts.map((post, index) => (
                        <div key={index} className={styles.card}>
                            <img src={post.image} alt="Blog" className={styles.cardImage} />
                            <h3 className={styles.cardTitle}>{post.title}</h3>
                            <div className={styles.cardMeta}>
                                <span>{post.author}</span>
                                <span>•</span>
                                <span>{post.date}</span>
                                <span>•</span>
                                <span className={styles.category}>{post.category}</span>
                            </div>
                            <p className={styles.cardText}>{post.text}</p>
                            <a href="#" className={styles.readMore}>Continue Reading...</a>
                        </div>
                    ))}
                </div>
            </section>

        </>
    );
};

export default Services;
