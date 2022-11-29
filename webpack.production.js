const { merge } = require("webpack-merge");
const webpackCommon = require("./webpack.common");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Webpack = require("webpack");

/** @type {import('webpack').Configuration} */

const config = {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
  plugins: [
    new Webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].css",
      chunkFilename: "static/css/[name].chunk.css",
    }),
  ],
};

// extraer los estilos en un archivo separado de css

module.exports = merge(webpackCommon, config);
