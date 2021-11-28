import "../styles/globals.scss";
import type { AppProps } from "next/app";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { defaultOptions } from "@/config/cache";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { getConfig } from "@/config/config";
import { useRouter } from "next/dist/client/router";
import { meta } from "@/helpers/metadata";
import { Maintance } from "@/components/Maintance/Maintance";
import SimpleReactLightbox from 'simple-react-lightbox'

const queryClient = new QueryClient({ defaultOptions });

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

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
      <SimpleReactLightbox>
        <Component {...pageProps} />
      </SimpleReactLightbox>
      </Maintance>
    </QueryClientProvider>
  );
}

export default MyApp;
