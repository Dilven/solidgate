import Document, { Html, Main, NextScript, Head } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pl">
        <body>
          <Main />
          <Head />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
