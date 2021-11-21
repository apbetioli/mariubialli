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
      /*
      {
        source: '/:sub*',
        destination: '/li/:sub*',
      },
      */
    ]
  },
  async redirects() {
    return [
    ]
  },
});