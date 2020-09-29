import React from 'react';
import Head from 'next/head';
import Router from 'next/router';

import NProgress from 'nprogress';
import GlobalStyled from '../assets/styles/globalStyled';

import UserProvider from '../context/user';


Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading foi ${url}`);
  NProgress.start();
})
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Head>
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <GlobalStyled />
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp;