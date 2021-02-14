/*
 * File: Slider.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-02-14 7:22:23 pm
 * Last Modified: 2021-02-14 9:17:13 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from './Slider.module.css';

export default function Slider({ items }) {
  return (
    <div className={styles.slider}>
      <div className={styles.slides}>
        {items.map((item) => (
          <div key={item.id} id={`slide${item.id}`}>
            <Image
              src={item.path}
              alt="Screenshot"
              width="auto"
              height="auto"
            />
          </div>
        ))}
      </div>

      <div className={styles.links}>
        {items.map((item) => (
          <a href={`#slide${item.id}`} key={item.id}>
            {item.id}
          </a>
        ))}
      </div>
    </div>
  );
}

Slider.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      path: PropTypes.string,
    })
  ).isRequired,
};
