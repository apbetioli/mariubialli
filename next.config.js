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
        source: '/obrigado',
        destination: '/ls1/obrigado',
        permanent: false,
      },
    ]
  },
});
