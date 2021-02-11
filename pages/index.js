/*
 * File: index.js
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-02-10 7:32:15 pm
 * Last Modified: 2021-02-11 9:34:19 am
 * -----
 * Copyright (c) 2021 Yuei
 */

import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

const navLinks = [
  { name: 'About Me', route: '/about-me' },
  { name: 'Portfolio', route: '/portfolio' },
  { name: 'Contact', route: '/contact' },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Abdel - Personal Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <Navbar links={navLinks} />
          <Image
            src="/images/contrast.svg"
            alt="Switch Theme"
            width="30"
            height="30"
          />
        </header>
        <section>
          <article>
            <h1>Souat Abdelmawla</h1>
            <h3>I'm a Frontend Developer</h3>
            <div className="social-icons">
              <Image
                src="/images/linkedin.svg"
                alt="Linkedin Profile"
                width="70"
                height="70"
              />
              <Image
                src="/images/github.svg"
                alt="Github Profile"
                width="70"
                height="70"
              />
              <Image
                src="/images/cv.svg"
                alt="CV Link"
                width="70"
                height="70"
              />
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
