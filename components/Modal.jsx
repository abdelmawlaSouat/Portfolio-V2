/*
 * File: Modal.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-02-13 11:05:45 pm
 * Last Modified: 2021-02-16 7:06:21 am
 * -----
 * Copyright (c) 2021 Yuei
 */
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Chip } from '@material-ui/core';

import Slider from './Slider';
import styles from './Modal.module.css';
import CloseIcon from '../public/images/cancel.svg';

export default function Modal({ isOpen, handleBool, data }) {
  return (
    <div className={clsx(styles.container, !isOpen ? styles.hidden : '')}>
      <div className={styles.content}>
        <CloseIcon
          className={styles.closeIcon}
          onClick={handleBool}
          width="25"
          height="25"
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
              <Chip className={styles.skill} key={item.id} label={item.name} />
            ))}
          </div>

          <div className={styles.btnsDiv}>
            <button type="button">Go to Site</button>
            <button type="button">Go in Github</button>
          </div>
        </article>
      </div>
    </div>
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
