/*
 * File: Header.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-02-13 9:54:39 am
 * Last Modified: 2021-03-22 8:19:20 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import Link from 'next/link';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';

import styles from './Header.module.css';

export default function Header({ title, subtitle }) {
  return (
    <header className={styles.header}>
      <div className={styles.titles}>
        <h2>{subtitle}</h2>
        <h1>{title}</h1>
      </div>
      <Link href="/">
        <a className={styles.closeIcon}>
          <AiOutlineClose size="50" />
        </a>
      </Link>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
