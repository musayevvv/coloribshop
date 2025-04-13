import React from 'react';
import styles from './Leader.module.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const teamMembers = [
    {
        name: 'John Rooster',
        title: 'CO-FOUNDER, PRESIDENT',
        image: 'https://preview.colorlib.com/theme/selling/images/person_2.jpg',
        description:
            'Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.',
    },
    {
        name: 'Tom Sharp',
        title: 'CO-FOUNDER, COO',
        image: 'https://preview.colorlib.com/theme/selling/images/person_3.jpg',
        description:
            'Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.',
    },
    {
        name: 'Winston Hodson',
        title: 'MARKETING',
        image: 'https://preview.colorlib.com/theme/selling/images/person_4.jpg',
        description:
            'Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.',
    },
];

const Leader = () => {
    return (
        <>
            <section className={styles.teamSection}>
                <p className={styles.subHeading}>TEAM</p>
                <h2 className={styles.heading}>Leadership</h2>
                <div className={styles.membersContainer}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className={styles.memberCard}>
                            <img src={member.image} alt={member.name} className={styles.memberImage} />
                            <h3 className={styles.memberName}>{member.name}</h3>
                            <p className={styles.memberTitle}>{member.title}</p>
                            <p className={styles.memberDesc}>{member.description}</p>
                            <div className={styles.socialIcons}>
                                <FaFacebookF />
                                <FaTwitter />
                                <FaLinkedinIn />
                                <FaInstagram />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.summerSale}>
                <div className={styles.overlay}>
                    <h4 className={styles.subtitle}>SPECIAL PROMO</h4>
                    <h1 className={styles.title}>Summer Sale</h1>
                    <p className={styles.description}>
                        Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur
                        laboriosam ipsam.
                    </p>
                    <div className={styles.timer}>
                        {['weeks', 'days', 'hr', 'min', 'sec'].map((unit, index) => (
                            <div key={index} className={styles.timerBox}>
                                <span>00</span>
                                <small>{unit}</small>
                            </div>
                        ))}
                    </div>
                    <button className={styles.shopButton}>SHOP NOW</button>
                </div>
            </section>
        </>
    );
};

export default Leader;
