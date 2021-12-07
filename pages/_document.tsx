import { getConfig } from "@/config/config";
import { meta } from "@/helpers/metadata";
import Document, { Html, Main, NextScript, Head } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pl">
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${getConfig(
              "NEXT_PUBLIC_GOOGLE_ANALYTICS"
            )}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${getConfig("NEXT_PUBLIC_GOOGLE_ANALYTICS")}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <meta name="application-name" content={meta.title} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={meta.title} />
          <meta name="description" content={meta.description} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#FFFFFF" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
