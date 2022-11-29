const { merge } = require("webpack-merge");
const webpackCommon = require("./webpack.common");

/** @type {import('webpack').Configuration} */

const devConfig = {
  mode: "development",
  devServer: {
    port: 5000,
    open: true,
    hot: true,
  },
};

module.exports = merge(webpackCommon, devConfig);
