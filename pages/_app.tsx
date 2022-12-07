import "../styles/globals.scss";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/dist/client/router";
import { meta } from "@/helpers/metadata";
import { Maintance } from "@/components/Maintance/Maintance";
import { pageview } from "@/helpers/analytics";

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath, events } = useRouter();
  useEffect(() => {
    const reportRouteChange = (url: string) => pageview(url);
    events.on("routeChangeComplete", reportRouteChange);
    return () => events.off("routeChangeComplete", reportRouteChange);
  }, [events]);

  return (
    <>
      <DefaultSeo
        title={meta.title}
        description={meta.description}
        openGraph={{
          type: "website",
          title: meta.title,
          locale: "pl_PL",
          url: `https://${process.env.NEXT_PUBLIC_URL}${asPath}`,
          description: meta.description,
          images: [
            {
              url: `https://${process.env.NEXT_PUBLIC_URL}/logo.png`,
              width: 1000,
              height: 1000,
            },
          ],
          site_name: meta.title,
        }}
      />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=yes, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>
      <Maintance>
        <Component {...pageProps} />
      </Maintance>
    </>
  );
}

export default MyApp;
