/*
 * File: about.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-02-12 8:35:21 pm
 * Last Modified: 2021-02-13 2:34:02 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import styles from '../styles/AboutMe.module.css';

import LinkedinIcon from '../public/images/linkedin.svg';
import GithubIcon from '../public/images/github.svg';

export default function AboutMe() {
  return (
    <div>
      <Head>
        <title>About me</title>
      </Head>
      <main className={styles.container}>
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
              <button type="button">Download CV</button>
              <div className={styles.socialIcons}>
                <Link href="https://www.linkedin.com/in/abdelmawla-souat/">
                  <a target="_blank">
                    <LinkedinIcon width="30" height="30" />
                  </a>
                </Link>
                <Link href="https://github.com/abdelmawlaSouat">
                  <a target="_blank">
                    <GithubIcon width="30" height="30" />
                  </a>
                </Link>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
