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
        destination: '/ls1/replay',
        permanent: false,
      },
      {
        source: '/ls1',
        destination: '/ls1/replay',
        permanent: false,
      },
      {
        source: '/inscrever/:origin*',
        destination: '/ls1/replay',
        permanent: false,
      },
      {
        source: '/obrigado/:origin*',
        destination: '/ls1/obrigado/:origin*',
        permanent: false,
      },
      {
        source: '/replay',
        destination: '/ls1/replay',
        permanent: false,
      },
      {
        source: '/confirmado',
        destination: '/ls1/confirmado',
        permanent: false,
      },
      {
        source: '/aguardando',
        destination: '/ls1/aguardando',
        permanent: false,
      },
      {
        source: '/whats',
        destination: 'https://chat.whatsapp.com/FrpF2gtQmRt1YSAiY7EwaP',
        permanent: false,
      },
      {
        source: '/telegram',
        destination: 'https://t.me/joinchat/RrAThTnLHvVmMWIx',
        permanent: false,
      },
      {
        source: '/aula',
        destination: '/ls1/replay',
        permanent: false,
      },
      {
        source: '/mm',
        destination: '/ls1/replay',
        permanent: false,
      },
      {
        source: '/checkout',
        destination: 'https://sun.eduzz.com/969161',
        permanent: false
      },
      {
        source: '/desafio',
        destination: '/ls1/replay',
        permanent: false,
      },
    ]
  },
});
