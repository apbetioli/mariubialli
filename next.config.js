/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });
    return config;
  },
  images: {
    domains: ["media.graphcms.com", "media.graphassets.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/apostilas",
        permanent: false,
      },
      {
        source: "/apostilas/:slug",
        destination: "/api/download/:slug",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/aulas",
        destination: "/aulas/og",
      },
      {
        source: "/aulas/obrigado",
        destination: "/aulas/obrigado/og",
      },
    ];
  },
};

module.exports = withPWA(nextConfig);
