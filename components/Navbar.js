/*
 * File: Navbar.js
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-02-10 7:42:49 pm
 * Last Modified: 2021-02-11 9:41:38 am
 * -----
 * Copyright (c) 2021 Yuei
 */

import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar({ links }) {
  return (
    <nav>
      <ul className={styles.linksList}>
        {links.map((link) => (
          <li>
            <Link href={link.route}>
              <a>{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
