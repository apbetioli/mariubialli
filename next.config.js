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
    return []
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/espera',
        permanent: false,
      },
      {
        source: '/aula-04',
        destination: '/espera',
        permanent: false,
      },
      {
        source: '/aula-03',
        destination: '/espera',
        permanent: false,
      },
      {
        source: '/aula-02',
        destination: '/espera',
        permanent: false,
      },
      {
        source: '/aula-01',
        destination: '/espera',
        permanent: false,
      },
      {
        source: '/whats',
        destination: 'https://leadzap.me/14818/bflijan22',
        permanent: false,
      },
      {
        source: '/vip',
        destination: 'https://leadzap.me/14818/bfvip',
        permanent: false,
      },
      {
        source: '/telegram',
        destination: 'https://t.me/mariubialli',
        permanent: false,
      },
      {
        source: '/checkout',
        destination: 'https://sun.eduzz.com/1152685',
        permanent: false
      },
      {
        source: '/comunidade',
        destination: 'http://www.facebook.com/groups/minisseriebonequeiradefeltro/',
        permanent: false
      },
    ]
  },
});