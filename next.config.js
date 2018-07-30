
require('babel-preset-env');
module.exports = {
  distDir: 'build',
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    config.node = {
      fs: 'empty',
      module: "empty",
    };
    return config;
  },
};
