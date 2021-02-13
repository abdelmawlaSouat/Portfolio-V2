/*
 * File: Header.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-02-13 9:54:39 am
 * Last Modified: 2021-02-13 10:08:24 am
 * -----
 * Copyright (c) 2021 Yuei
 */

import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import CloseIcon from '../public/images/cancel.svg';

export default function Header({ title, subtitle }) {
  return (
    <header className={styles.header}>
      <div className={styles.titles}>
        <h2>{subtitle}</h2>
        <h1>{title}</h1>
      </div>
      <Link href="/">
        <a className={styles.closeIcon}>
          <CloseIcon width="30" height="30" />
        </a>
      </Link>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
