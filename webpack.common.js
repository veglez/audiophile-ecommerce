const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const {
  default: TsconfigPathsPlugin,
} = require("tsconfig-paths-webpack-plugin");

/** @type {import('webpack').Configuration} */

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src", "index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      { test: /\.scss/i, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.js/i, use: ["babel-loader"], exclude: /node_modules/ },
      { test: /\.tsx?/i, use: "ts-loader", exclude: /node_modules/ },
      { test: /\.(png|)/i },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    plugins: [new TsconfigPathsPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
};
