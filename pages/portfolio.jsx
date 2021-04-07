/*
 * File: portfolio.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-02-13 9:59:52 pm
 * Last Modified: 2021-04-05 9:31:13 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
        <title>Porfolio | Abdel Souat</title>
      </Head>
      <motion.main
        className={!isOpen ? styles.container : styles.hidden}
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        exit={{ y: 300 }}
        transition={{ ease: 'easeOut', duration: 0.3 }}
      >
        <Header title="Portfolio" subtitle="Showcasing some of my best work" />
        <section>
          {projects.map((item) => (
            <a href="#" key={item.id}>
              <motion.div
                aria-hidden="true"
                className={styles.card}
                onClick={() => generateModal(item)}
                whileHover={{
                  scale: 1.07,
                }}
              >
                <Image
                  src={`/images/projects/${item.gallery[0].path}`}
                  alt={item.name}
                  width="390"
                  height="300"
                  layout="intrinsic"
                  priority
                />
              </motion.div>
            </a>
          ))}
        </section>
      </motion.main>
      <Modal
        isOpen={isOpen}
        handleBool={() => setIsOpen(!isOpen)}
        data={project}
      />
    </div>
  );
}
