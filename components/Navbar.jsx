/*
 * File: Navbar.js
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-02-10 7:42:49 pm
 * Last Modified: 2021-02-11 4:05:38 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import Link from 'next/link';
import Proptypes from 'prop-types';
import styles from './Navbar.module.css';

export default function Navbar({ links }) {
  return (
    <nav>
      <ul className={styles.linksList}>
        {links.map((link) => (
          <li key={link.idx}>
            <Link href={link.route}>
              <a>{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
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
