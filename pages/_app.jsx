/*
 * File: _app.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-02-10 7:32:15 pm
 * Last Modified: 2021-03-24 4:06:58 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import { useEffect } from 'react';
import Footer from '../components/Footer';
import '../styles/globals.css';

// eslint-disable-next-line react/prop-types
function Portfolio({ Component, pageProps }) {
  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      const themeType = 'lightTheme';

      localStorage.setItem('theme', themeType);
      document.documentElement.className = themeType;
    } else {
      document.documentElement.className = localStorage.getItem('theme');
    }
  }, []);

  return (
    <div>
      <Component {...pageProps} />
      <Footer name="Souat Abdelmawla" />
    </div>
  );
}

export default Portfolio;
