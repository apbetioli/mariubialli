const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const path = require("path");

module.exports = withPlugins([[withImages]], {
  target: "serverless",
  webpack(config) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ls1/inscrever',
        permanent: false,
      },
      {
        source: '/ls1',
        destination: '/ls1/inscrever',
        permanent: false,
      },
      {
        source: '/inscrever/:origin*',
        destination: '/ls1/inscrever/:origin*',
        permanent: false,
      },
      {
        source: '/obrigado/:origin*',
        destination: '/ls1/obrigado?origin=:origin*',
        permanent: false,
      },
      {
        source: '/replay',
        destination: '/ls1/replay',
        permanent: false,
      },
      {
        source: '/whats',
        destination: 'https://chat.whatsapp.com/HHbk1HCh8dJ1Y68764nVqI',
        permanent: false,
      },
      {
        source: '/telegram',
        destination: 'https://t.me/joinchat/RrAThTnLHvVmMWIx',
        permanent: false,
      }
    ]
  },
});
