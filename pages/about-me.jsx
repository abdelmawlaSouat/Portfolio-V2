/*
 * File: about.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-02-12 8:35:21 pm
 * Last Modified: 2021-06-24 5:39:24 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Header from '../components/Header';
import styles from '../styles/AboutMe.module.css';

export default function AboutMe() {
  return (
    <div>
      <Head>
        <title>About me | Abdel Souat</title>
      </Head>
      <motion.main
        className={styles.container}
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        exit={{ y: 300 }}
        transition={{ ease: 'easeOut', duration: 0.3 }}
      >
        <Header title="About me." subtitle="Get to know me" />
        <section>
          <Image
            className={styles.profileImg}
            src="/images/profile.png"
            alt="Profile"
            width="350px"
            height="467px"
          />
          <article>
            <h3>Who am I ?</h3>
            <span className={styles.textXL}>
              I&apos;m Abdel, a Front-end Developer
            </span>
            <p>
              I have a real interest in building fast, responsive, and intuitive
              web applications by using the best and modern practices. I will
              provide high-quality code and the satisfaction of my clients. That
              is why I spend my spare time improving my programming skills.
            </p>
            <p>
              At the moment, I have strong skills in the 3 essentials (HTML5,
              CSS3 & Javascript). In addition to this, I have experiences with
              Javascript frameworks (React.js & Vue.js), state management
              libraries (Redux & VueX), server-side rendering (Next.js), CSS
              libraries (Bootstrap, Vuetify & Material UI), backend development
              (Node.js, Express.js & MongoDB), packages manager (npm & yarn),
              testing tools (Jest, Enzyme & Cypress), and other tools (Git &
              Webpack).
            </p>
            <div className={styles.moreInfos}>
              <div>
                <span className={styles.boldTxt}>Age: </span>
                <span>23</span>
              </div>
              <div>
                <span className={styles.boldTxt}>From:</span>
                <span> Brussels</span>
              </div>
              <div>
                <span className={styles.boldTxt}>Email:</span>
                <span> abdelmawla.souat@gmail.com</span>
              </div>
            </div>
            <div className={styles.articleFooter}>
              <Link href="/files/Abdel Souat - CV.pdf">
                <a target="_blank">
                  <button type="button">Download CV</button>
                </a>
              </Link>
              <div className={styles.socialIcons}>
                <Link href="https://www.linkedin.com/in/abdelmawla-souat/">
                  <a target="_blank">
                    <FaLinkedin size="30" />
                  </a>
                </Link>
                <Link href="https://github.com/abdelmawlaSouat">
                  <a target="_blank">
                    <FaGithub size="30" />
                  </a>
                </Link>
              </div>
            </div>
          </article>
        </section>
      </motion.main>
    </div>
  );
}
