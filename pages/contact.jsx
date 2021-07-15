/*
 * File: contact.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-02-13 9:51:18 am
 * Last Modified: 2021-07-15 2:40:25 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Alert from '@material-ui/lab/Alert';
import axios from 'axios';
import { FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import Header from '../components/Header';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);

  const { register, handleSubmit } = useForm();
  const sendEmail = (data) => {
    axios.post('/api/send-mail', data).then((response) => {
      if (response.data.msg === 'success') {
        setShowSuccessMessage(true);
        setShowFailMessage(false);
      } else if (response.data.msg === 'fail') {
        setShowSuccessMessage(false);
        setShowFailMessage(true);
      }
    });
  };

  return (
    <div>
      <Head>
        <title>Contact me | Abdel Souat</title>
      </Head>
      <motion.main
        className={styles.container}
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        exit={{ y: 300 }}
        transition={{ ease: 'easeOut', duration: 0.3 }}
      >
        <Header
          title="Get in Touch."
          subtitle="Feel free to contact me anytimes"
        />
        <section>
          <form onSubmit={handleSubmit(sendEmail)}>
            <h3>Message Me</h3>
            <div className={styles.alert}>
              {showSuccessMessage && (
                <Alert severity="success" variant="filled">
                  Thank you for your message ! I’ll get back to you as soon as
                  possible !
                </Alert>
              )}

              {showFailMessage && (
                <Alert severity="error" variant="filled">
                  Oops, something went wrong. Try again
                </Alert>
              )}
            </div>

            <div>
              <input
                type="text"
                name="name"
                ref={register}
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                ref={register}
                placeholder="Email"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              ref={register}
              placeholder="Subject"
              required
            />
            <textarea
              name="message"
              ref={register}
              cols="30"
              rows="10"
              placeholder="Message"
              required
            />
            <button type="submit">Send Message</button>
          </form>
          <aside>
            <h3>Contact info</h3>
            <p>
              Always available for work if the right project comes along, Feel
              free to contact me!
            </p>
            <div className={styles.contactTypes}>
              <Link href="tel:+32484697707">
                <a target="_blank">
                  <div className={styles.contactType}>
                    <FaPhoneAlt size="30" />
                    <div className={styles.contactLink}>
                      <span className={styles.boldTxt}>Call me</span>
                      <span>+32 484 69 77 07</span>
                    </div>
                  </div>
                </a>
              </Link>

              <Link href="mailto:abdelmawla.souat@gmail.com">
                <a target="_blank">
                  <div className={styles.contactType}>
                    <IoMdSend size="30" />
                    <div className={styles.contactLink}>
                      <span className={styles.boldTxt}>Email me</span>
                      <span>abdelmawla.souat@gmail.com</span>
                    </div>
                  </div>
                </a>
              </Link>

              <Link href="https://www.linkedin.com/in/abdelmawla-souat/">
                <a target="_blank">
                  <div className={styles.contactType}>
                    <FaLinkedinIn size="30" />
                    <div className={styles.contactLink}>
                      <span className={styles.boldTxt}>Connect with me</span>
                      <span>Abdelmawla Souat</span>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </aside>
        </section>
      </motion.main>
    </div>
  );
}
