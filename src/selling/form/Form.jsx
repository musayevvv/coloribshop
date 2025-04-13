
import React, { useState } from "react";
import styles from "./Form.module.css";
import axios from "axios";

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendData = (e) => {
    e.preventDefault();

    axios.post('https://northwind.vercel.app/api/categories', {
      firstName,
      lastName,
      email,
      subject,
      message
    })
    .then((res) => {
      setFirstName('');
      setLastName('');
      setEmail('');
      setSubject('');
      setMessage('');
    })
  
  };

  return (
    <section className={styles.contactSection}>
      <h5 className={styles.subHeading}>CONTACT FORM</h5>
      <h2 className={styles.heading}>Get In Touch</h2>

      <div className={styles.formContainer}>
        <h3 className={styles.formTitle}>Contact Form</h3>
        <form className={styles.form} onSubmit={sendData}>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="firstName">First Name</label>
              <input 
                type="text" 
                id="firstName" 
                name="firstName" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required 
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="lastName">Last Name</label>
              <input 
                type="text" 
                id="lastName" 
                name="lastName" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required 
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="subject">Subject</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required 
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required 
            ></textarea>
          </div>

          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
