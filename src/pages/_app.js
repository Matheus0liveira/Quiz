import React from 'react';

import GlobalStyled from '../assets/styles/globalStyled';


import UserProvider from '../context/user';


const MyApp = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <GlobalStyled />
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp;