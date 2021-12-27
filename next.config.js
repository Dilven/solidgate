const { ANALYZE } = process.env;

const withPWA = require("next-pwa");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  pwa: {
    dest: "public",
  },
  ...withBundleAnalyzer({
    reactStrictMode: true,
    serverRuntimeConfig: {
      // Will only be available on the server side
    },
    publicRuntimeConfig: {
      NEXT_PUBLIC_GOOGLE_MAPS_API_KEY:
        process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
      NEXT_PUBLIC_INTERNAL_API_TIMEOUT:
        process.env.NEXT_PUBLIC_INTERNAL_API_TIMEOUT,
      NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    },
    images: {
      deviceSizes: [320, 450, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
    async redirects() {
      return [
        {
          source: "/galeria-ogrodzenia-balustrady/ogrodzenia-wielun",
          destination: "/galeria/ogrodzenia",
          permanent: true,
        },
        {
          source: "/galeria-ogrodzenia-balustrady/balustrady-schodowe-wielun",
          destination: "/galeria/balustrady-schodowe",
          permanent: true,
        },
        {
          source:
            "https://www.solidgate.pl/galeria-ogrodzenia-balustrady/brama-kuta-furtka",
          destination: "/galeria/bramy-furtki",
          permanent: true,
        },
        {
          source: "galeria-ogrodzenia-balustrady/balustrady-kute-wielun",
          destination: "/galeria/balustrady",
          permanent: true,
        },
      ];
    },
  }),
});
