import React from 'react';

import GlobalStyled from '../assets/styles/globalStyled';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyled />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;