import React from "react";

import Document, { Html, Head, Main, NextScript } from "next/document";


export default class MyDocument extends Document {


  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({


        enhanceApp: (App) => App,


        enhanceComponent: (Component) => Component,
      });

    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    return (
      <Html>
        <Head lang="pt-br">
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Rubik:wght@300;400;600&display=swap" rel="stylesheet" />
          <title>TECQUIZ</title>
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
