import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <meta charSet="utf-8" />    
            
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            
            <link rel="apple-touch-icon" href="/assets/img/favicon.jpg"/>
            <link rel="icon" type="image/x-icon" href="/assets/img/favicon.ico"/>
            {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument