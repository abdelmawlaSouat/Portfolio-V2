/*
 * File: index.js
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-02-10 7:32:15 pm
 * Last Modified: 2021-02-11 1:30:00 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

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
              <ThemeSwitcherIcon
                className={styles.svg}
                width="30"
                height="30"
              />
            </a>
          </Link>
        </header>
        <section className={styles.content}>
          <article>
            <h1 className={styles.name}>Souat Abdelmawla</h1>
            <h3 className={styles.job}>I&apos;m a Frontend Developer</h3>
            <div className={styles.socialIcons}>
              <Link href="/">
                <a>
                  <LinkedinIcon className={styles.svg} width="40" height="40" />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <GithubIcon className={styles.svg} width="40" height="40" />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <CvIcon className={styles.svg} width="40" height="40" />
                </a>
              </Link>
            </div>
          </article>
          <Image
            src="/images/profile.jpg"
            alt="Profile"
            width="480"
            height="480"
          />
        </section>
      </main>
    </div>
  );
}
