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
      NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    },
  }),
});
