const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  target: "node",
  mode: "production",
  context: path.resolve(__dirname, "src"),
  entry: ["@babel/polyfill", "./server/index.js"],
  externals: [webpackNodeExternals()],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [{ test: /\.png$/, loader: "url-loader" }],
  },
};

module.exports = merge(baseConfig, config);
