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
        destination: '/ac/espera',
        permanent: false,
      },
      {
        source: '/inscrever/:origin*',
        destination: '/ac/espera',
        permanent: false,
      },
      {
        source: '/obrigado/:origin*',
        destination: '/ac/espera',
        permanent: false,
      },
      {
        source: '/replay',
        destination: '/ac/espera',
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
        destination: 'https://t.me/mariubialli',
        permanent: false,
      },
      {
        source: '/aula',
        destination: '/ac/espera',
        permanent: false,
      },
      {
        source: '/mm',
        destination: '/ac/espera',
        permanent: false,
      },
      {
        source: '/checkout',
        destination: 'https://sun.eduzz.com/969161',
        permanent: false
      },
      {
        source: '/desafio',
        destination: '/ac/espera',
        permanent: false,
      },
    ]
  },
});
