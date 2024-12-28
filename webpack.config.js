// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/javascript/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/home.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/home.html",
      filename: "home.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/join-now.html",
      filename: "join-now.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/curriculum.html",
      filename: "curriculum.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/shop.html",
      filename: "shop.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/contact.html",
      filename: "contact.html"
    }),
    new HtmlWebpackPlugin({
      template: "./src/login.html",
      filename: "login.html"
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};