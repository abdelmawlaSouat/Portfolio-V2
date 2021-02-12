/*
 * File: index.js
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-02-10 7:32:15 pm
 * Last Modified: 2021-02-12 10:03:46 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

import ThemeSwitcherIcon from '../public/images/contrast.svg';
import LinkedinIcon from '../public/images/linkedin.svg';
import GithubIcon from '../public/images/github.svg';
import CvIcon from '../public/images/cv.svg';

const navLinks = [
  { idx: 1, name: 'About Me', route: '/about-me' },
  { idx: 2, name: 'Portfolio', route: '/portfolio' },
  { idx: 3, name: 'Contact', route: '/contact' },
];

export default function Home() {
  const [theme, setTheme] = useState('null');

  function applyTheme(themeType) {
    document.documentElement.className = themeType;
    setTheme(themeType);
  }

  function switchTheme() {
    const themeType = theme === 'lightTheme' ? 'darkTheme' : 'lightTheme';
    localStorage.setItem('theme', themeType);
    applyTheme(themeType);
  }

  return (
    <div>
      <Head>
        <title>Abdel - Personal Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <header className={styles.header}>
          <Navbar links={navLinks} />
          <Link href="/">
            <a>
              <ThemeSwitcherIcon width="30" height="30" onClick={switchTheme} />
            </a>
          </Link>
        </header>
        <section className={styles.content}>
          <article>
            <h1 className={styles.name}>Souat Abdelmawla</h1>
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
                  <LinkedinIcon width="40" height="40" />
                </a>
              </Link>
              <Link href="https://github.com/abdelmawlaSouat">
                <a target="_blank">
                  <GithubIcon width="40" height="40" />
                </a>
              </Link>
              <Link href="/">
                <a target="_blank">
                  <CvIcon width="40" height="40" />
                </a>
              </Link>
            </div>
          </article>
          <Image
            className={styles.profile}
            src="/images/profile.jpg"
            alt="Profile"
            width="480px"
            height="480px"
          />
        </section>
      </main>
    </div>
  );
}
