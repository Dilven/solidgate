const { ANALYZE } = process.env;

const withPWA = require("next-pwa")({
  dest: "public",
});
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  ...withBundleAnalyzer({
    reactStrictMode: true,
    images: {
      deviceSizes: [320, 450, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
    async redirects() {
      return [
        {
          source: "/galeria-ogrodzenia-balustrady",
          destination: "/galeria",
          permanent: true,
        },
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
          source: "/galeria-ogrodzenia-balustrady/brama-kuta-furtka",
          destination: "/galeria/bramy-furtki",
          permanent: true,
        },
        {
          source: "/galeria-ogrodzenia-balustrady/balustrady-kute-wielun",
          destination: "/galeria/balustrady",
          permanent: true,
        },
      ];
    },
  }),
});
