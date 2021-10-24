const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const path = require("path");

module.exports = withPlugins([[withImages]], {
  target: "serverless",
  webpack(config) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/obrigado/:sub*',
        destination: '/matriculas-abertas',
      },
      {
        source: '/:sub*',
        destination: '/li/:sub*',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/aula-01',
        destination: '/matriculas-abertas',
        permanent: false,
      },
      {
        source: '/aula-02',
        destination: '/matriculas-abertas',
        permanent: false,
      },
      {
        source: '/aula-03',
        destination: '/matriculas-abertas',
        permanent: false,
      },
      {
        source: '/lista-vip',
        destination: '/matriculas-abertas',
        permanent: false,
      },
      {
        source: '/',
        destination: '/matriculas-abertas',
        permanent: false,
      },
      {
        source: '/whats',
        destination: 'https://joinzap.app/mac',
        permanent: false,
      },
      {
        source: '/vip',
        destination: 'https://joinzap.app/mac-vip',
        permanent: false,
      },
      {
        source: '/telegram',
        destination: 'https://t.me/mariubialli',
        permanent: false,
      },
      {
        source: '/checkout',
        destination: 'https://sun.eduzz.com/969161',
        permanent: false
      },
      {
        source: '/comunidade',
        destination: 'http://www.facebook.com/groups/maratonaartesacriativa/',
        permanent: false
      },
    ]
  },
});