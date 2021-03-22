/*
 * File: Navbar.js
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-02-10 7:42:49 pm
 * Last Modified: 2021-03-22 8:11:05 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import { useState } from 'react';
import Link from 'next/link';
import Proptypes from 'prop-types';
import clsx from 'clsx';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

import styles from './Navbar.module.css';

export default function Navbar({ links }) {
  const [visibleNav, setVisibleNav] = useState(false);
  return (
    <nav>
      <HiOutlineMenuAlt3
        className={clsx(styles.menuIcon, styles.svg)}
        size="30"
        onClick={() => setVisibleNav(!visibleNav)}
      />
      <div
        className={clsx(styles.mobileMenu, visibleNav ? styles.visibleNav : '')}
      >
        <AiOutlineClose
          size="50"
          className={clsx(styles.svg)}
          onClick={() => setVisibleNav(!visibleNav)}
        />
        <ul className={styles.linksList}>
          {links.map((link) => (
            <li key={link.idx}>
              <Link href={link.route}>
                <a>{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  links: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.number,
      name: Proptypes.string,
      route: Proptypes.string,
    })
  ).isRequired,
};
