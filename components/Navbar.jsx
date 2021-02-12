/*
 * File: Navbar.js
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-02-10 7:42:49 pm
 * Last Modified: 2021-02-12 6:51:54 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import { useState } from 'react';
import Link from 'next/link';
import Proptypes from 'prop-types';
import clsx from 'clsx';
import styles from './Navbar.module.css';
import MenuIcon from '../public/images/menu.svg';
import CloseIcon from '../public/images/cancel.svg';

export default function Navbar({ links }) {
  const [visibleNav, setVisibleNav] = useState(false);
  return (
    <nav>
      <MenuIcon
        className={clsx(styles.menuIcon, styles.svg)}
        width="30"
        height="30"
        onClick={() => setVisibleNav(!visibleNav)}
      />
      <div
        className={clsx(styles.mobileMenu, visibleNav ? styles.visibleNav : '')}
      >
        <CloseIcon
          className={clsx(styles.svg)}
          width="30"
          height="30"
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
