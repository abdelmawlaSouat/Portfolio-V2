/*
 * File: _app.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-02-10 7:32:15 pm
 * Last Modified: 2021-02-13 9:44:44 am
 * -----
 * Copyright (c) 2021 Yuei
 */

import { useEffect } from 'react';
import '../styles/globals.css';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      const themeType = 'lightTheme';

      localStorage.setItem('theme', themeType);
      document.documentElement.className = themeType;
    } else {
      document.documentElement.className = localStorage.getItem('theme');
    }
  }, []);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default MyApp;
