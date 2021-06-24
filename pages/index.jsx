/*
 * File: index.js
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-02-10 7:32:15 pm
 * Last Modified: 2021-06-24 5:39:02 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { WiMoonAltThirdQuarter } from 'react-icons/wi';

import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

const navLinks = [
  { idx: 1, name: 'About Me', route: '/about-me' },
  { idx: 2, name: 'Portfolio', route: '/portfolio' },
  { idx: 3, name: 'Contact', route: '/contact' },
];

export default function Home() {
  function switchTheme() {
    const theme =
      localStorage.getItem('theme') === 'lightTheme'
        ? 'darkTheme'
        : 'lightTheme';
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
  }

  return (
    <div>
      <Head>
        <title>Abdel Souat | Frontend Developer </title>
        <link rel="icon" href="/icon.ico" />
      </Head>

      <motion.main
        className={styles.container}
        initial={{ y: 300 }}
        animate={{ y: 0 }}
        exit={{ y: -300 }}
        transition={{ ease: 'easeOut', duration: 0.3 }}
      >
        <header className={styles.header}>
          <Navbar links={navLinks} />
          <WiMoonAltThirdQuarter size="40" onClick={switchTheme} />
        </header>
        <section className={styles.content}>
          <article>
            <h1 className={styles.name}>Abdel Souat</h1>
            <div className={styles.job}>
              <span>I&apos;m a </span>
              <div className={styles.jobsListContainer}>
                <ul className={styles.jobsList}>
                  <li>Frontend Developer</li>
                  <li>Freelancer</li>
                </ul>
              </div>
            </div>

            <div className={styles.socialIcons}>
              <Link href="https://www.linkedin.com/in/abdelmawla-souat/">
                <a target="_blank">
                  <FaLinkedin size="40" />
                </a>
              </Link>
              <Link href="https://github.com/abdelmawlaSouat">
                <a target="_blank">
                  <FaGithub size="40" />
                </a>
              </Link>
              <Link href="/files/Abdel Souat - CV.pdf">
                <a target="_blank">
                  <AiOutlineFilePdf size="40" />
                </a>
              </Link>
            </div>
          </article>
          <aside className={styles.profile}>
            <Image
              src="/images/cover.png"
              alt="Abdelmawla Souat"
              width="auto"
              height="auto"
              layout="intrinsic"
              priority
            />
          </aside>
        </section>
      </motion.main>
    </div>
  );
}
