/*
 * File: Footer.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-03-22 9:42:37 pm
 * Last Modified: 2021-03-26 11:16:56 am
 * -----
 * Copyright (c) 2021 Yuei
 */

import PropTypes from 'prop-types';
import styles from './Footer.module.css';

export default function Footer({ name }) {
  return (
    <footer className={styles.footer}>
      <span>{`© ${new Date().getFullYear()} By ${name}`}</span>
    </footer>
  );
}

Footer.propTypes = {
  name: PropTypes.string.isRequired,
};
