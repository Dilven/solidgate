import "../styles/globals.scss";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { defaultOptions } from "@/config/cache";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { getConfig } from "@/config/config";
import { useRouter } from "next/dist/client/router";
import { meta } from "@/helpers/metadata";
import { Maintance } from "@/components/Maintance/Maintance";
import { pageview } from "@/helpers/analytics";

const queryClient = new QueryClient({ defaultOptions });

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath, events } = useRouter();
  useEffect(() => {
    const reportRouteChange = (url: string) => pageview(url);
    events.on("routeChangeComplete", reportRouteChange);
    return () => events.off("routeChangeComplete", reportRouteChange);
  }, [events]);

  return (
    <QueryClientProvider client={queryClient}>
      <DefaultSeo
        title={meta.title}
        noindex={false}
        // TODO
        dangerouslySetAllPagesToNoFollow
        dangerouslySetAllPagesToNoIndex
        dangerouslyDisableGooglebot
        description={meta.description}
        openGraph={{
          type: "website",
          title: meta.title,
          locale: "pl_PL",
          url: `https://${getConfig("NEXT_PUBLIC_URL")}${asPath}`,
          description: meta.description,
          images: [
            {
              url: `https://${getConfig("NEXT_PUBLIC_URL")}/logo.png`,
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
    </QueryClientProvider>
  );
}

export default MyApp;
