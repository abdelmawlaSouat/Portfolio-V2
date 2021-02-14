/*
 * File: portfolio.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-02-13 9:59:52 pm
 * Last Modified: 2021-02-14 9:16:49 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Modal from '../components/Modal';
import styles from '../styles/Portfolio.module.css';
import projects from '../data/projects.json';

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState({
    id: -1,
    name: '',
    description: '',
    skills: [],
    gallery: [],
    githubLink: '',
    siteLink: '',
  });

  function generateModal(item) {
    setIsOpen(!isOpen);
    setProject(item);
  }

  return (
    <div>
      <Head>
        <title>Porfolio</title>
      </Head>
      <main className={!isOpen ? styles.container : styles.hidden}>
        <Header title="Portfolio" subtitle="Showcasing some of my best work" />
        <section>
          {projects.map((item) => (
            <div
              key={item.id}
              className={styles.card}
              onClick={() => generateModal(item)}
              aria-hidden="true"
            />
          ))}
        </section>
      </main>
      <Modal
        isOpen={isOpen}
        handleBool={() => setIsOpen(!isOpen)}
        data={project}
      />
    </div>
  );
}
