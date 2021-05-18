const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

const config = {
  mode: "development",
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "[name].[ext]",
              publicPath: "assets/icons",
              outputPath: "images",
            },
          },
        ],
      },
    ],
  },
};

module.exports = merge(baseConfig, config);
