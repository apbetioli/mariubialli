/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
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
  i18n: {
    locales: ["pt-BR"],
    defaultLocale: "pt-BR",
  },
};

module.exports = withBundleAnalyzer(nextConfig);
