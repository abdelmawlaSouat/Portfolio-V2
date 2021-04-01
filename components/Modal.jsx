/*
 * File: Modal.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-02-13 11:05:45 pm
 * Last Modified: 2021-04-01 9:33:34 pm
 * -----
 * Copyright (c) 2021 Yuei
 */
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Chip } from '@material-ui/core';
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';

import Slider from './Slider';
import styles from './Modal.module.css';

export default function Modal({ isOpen, handleBool, data }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={clsx(styles.container)}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
        >
          <div className={styles.content}>
            <AiOutlineClose
              size="40"
              className={styles.closeIcon}
              onClick={handleBool}
            />

            <div className={styles.sliderContainer}>
              <Slider items={data.gallery} />
            </div>

            <article>
              <h3>{data.name}</h3>
              <p>{data.description}</p>
              <h4>Skills</h4>
              <div className={styles.skillsList}>
                {data.skills.map((item) => (
                  <Chip
                    className={styles.skill}
                    key={item.id}
                    label={item.name}
                  />
                ))}
              </div>

              <div className={styles.btnsDiv}>
                <Link href={data.siteLink}>
                  <a target="_blank">
                    <button type="button">Go to Site</button>
                  </a>
                </Link>
                <Link href={data.githubLink}>
                  <a target="_blank">
                    <button type="button">Go in Github</button>
                  </a>
                </Link>
              </div>
            </article>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleBool: PropTypes.func.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ).isRequired,
    gallery: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        path: PropTypes.string,
      })
    ).isRequired,
    githubLink: PropTypes.string,
    siteLink: PropTypes.string,
  }).isRequired,
};
