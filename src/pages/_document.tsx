import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

import theme from '../styles/theme';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@500;600&family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
