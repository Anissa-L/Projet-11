const webpack = require("webpack");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Ajoutez les polyfills pour les modules Node.js
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        zlib: require.resolve("browserify-zlib"),
        stream: require.resolve("stream-browserify"),
        buffer: require.resolve("buffer"),
      };

      webpackConfig.plugins = [
        ...webpackConfig.plugins,
        new webpack.ProvidePlugin({
          process: "process/browser",
          Buffer: ["buffer", "Buffer"],
        }),
      ];

      return webpackConfig;
    },
  },
};
