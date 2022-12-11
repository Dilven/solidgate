const prod = process.env.NODE_ENV === "production";
const withPWA = require("next-pwa")({
  dest: "public",
  disable: !prod,
});

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    deviceSizes: [320, 450, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  // This setting will force the build to be single-threaded, which limits the speed at which requests are made within the getStaticProps.
  // As a result, the build runs slower but completes without errors.
  // https://hygraph.com/docs/api-reference/basics/rate-limits#thread-limiting
  experimental: {
    workerThreads: false,
    cpus: 1,
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
});
