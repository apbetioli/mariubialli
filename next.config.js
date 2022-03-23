/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  },
  webpackDevMiddleware: (config) => {
    return config;
  },
  images: {
    domains: ['media.graphcms.com']
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/aulas',
        permanent: false
      },
      {
        source: '/clube',
        destination: '/',
        permanent: false
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/aulas',
        destination: '/aulas/og',
      },
      {
        source: '/aulas/obrigado',
        destination: '/aulas/obrigado/og',
      }
    ]
  },

}

module.exports = nextConfig
