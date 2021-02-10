/*
 * File: Navbar.js
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-02-10 7:42:49 pm
 * Last Modified: 2021-02-10 9:31:39 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import Image from 'next/image';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>About Me</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <Image
        src="/images/contrast.svg"
        alt="Switch Theme"
        width="30"
        height="30"
      />
    </nav>
  );
}
