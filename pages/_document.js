import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru" dir="ltr">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Content-Language" content="ru" />
        <meta name="language" content="Russian" />
        <meta name="content-language" content="ru" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}