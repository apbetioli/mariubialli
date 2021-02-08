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
        destination: '/joiasraras',
        permanent: false,
      },
      {
        source: '/espera',
        destination: '/joiasraras',
        permanent: false,
      },
    ]
  },
});
