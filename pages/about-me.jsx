/*
 * File: about.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-02-12 8:35:21 pm
 * Last Modified: 2021-03-24 4:34:27 pm
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
        <title>About me</title>
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
            src="/images/profile.jpg"
            alt="Profile"
            width="480px"
            height="480px"
          />
          <article>
            <h3>Who am I ?</h3>
            <span className={styles.textXL}>
              I&apos;m Abdelmawla Souat, a Front-end Developer
            </span>
            <p>
              I am a freelancer based in Belgium. After a cursus at 19 (42
              network) and a rewarding internship in software development at
              Niboo, I am aiming at a company that could not only trust me but
              also allow me to grow as a developer. I have an overflowing
              curiosity and a pronounced taste for learning.
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
              <Link href="/files/Souat Abdelmawla - ENG.pdf">
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
