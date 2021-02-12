/*
 * File: _app.jsx
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-02-10 7:32:15 pm
 * Last Modified: 2021-02-12 10:02:55 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import { useState, useEffect } from 'react';
import '../styles/globals.css';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('null');

  function applyTheme(themeType) {
    document.documentElement.className = themeType;
    setTheme(themeType);
  }

  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      const themeType = 'lightTheme';

      localStorage.setItem('theme', themeType);
      applyTheme(themeType);
    } else {
      applyTheme(localStorage.getItem('theme'));
    }
  }, [theme]);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default MyApp;
