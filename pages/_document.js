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

          <meta name="apple-mobile-web-app-capable" content="yes" />

          <link rel="apple-touch-icon" href="favicon.jpg" />
          <link rel="icon" type="image/x-icon" href="favicon.ico" />

          {/* Google Icons */}
          <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet"/>

          {/* Font Awesome Icons */}
          <script src="https://kit.fontawesome.com/12239df2d7.js" crossorigin="anonymous"></script>

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