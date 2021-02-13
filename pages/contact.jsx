/*
 * File: contact.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-02-13 9:51:18 am
 * Last Modified: 2021-02-13 9:05:20 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import styles from '../styles/Contact.module.css';

import PhoneIcon from '../public/images/phone-call.svg';
import LinkedinIcon from '../public/images/linkedin-1.svg';
import EmailIcon from '../public/images/sent.svg';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact me</title>
      </Head>
      <main className={styles.container}>
        <Header
          title="Get in Touch."
          subtitle="Feel free to contact me anytimes"
        />
        <section>
          <form>
            <h3>Message Me</h3>
            <div>
              <input type="text" name="name" id="" placeholder="Name" />
              <input type="email" name="email" id="" placeholder="Email" />
            </div>
            <input type="text" name="subject" id="" placeholder="Subject" />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            />
            <button type="button">Send Message</button>
          </form>
          <aside>
            <h3>Contact info</h3>
            <p>
              Always available for freelance work if the right project comes
              along, Feel free to contact me!
            </p>
            <div className={styles.contactTypes}>
              <Link href="tel:+32484697707">
                <a target="_blank">
                  <div className={styles.contactType}>
                    <PhoneIcon width="30" height="30" />
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
                    <EmailIcon width="30" height="30" />
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
                    <LinkedinIcon width="30" height="30" />
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
      </main>
    </div>
  );
}
