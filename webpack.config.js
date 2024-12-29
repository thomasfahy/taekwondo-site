// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode: "development",
  entry: {
    index: "./src/javascript/index.js",
    home: "./src/javascript/home.js",
    navbar: "./src/javascript/navbar.js",
    slider: "./src/javascript/slider.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/home.html"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'home.css',
      filename: 'navbar.css',
      filename: 'slider.css',
    }),
    new HtmlWebpackPlugin({
      template: "./src/home.html",
      filename: "home.html",
      chunks: ["home", "navbar", "slider"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/join-now.html",
      filename: "join-now.html",
      chunks: ["navbar"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/curriculum.html",
      filename: "curriculum.html",
      chunks: ["navbar"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/shop.html",
      filename: "shop.html",
      chunks: ["navbar"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/contact.html",
      filename: "contact.html",
      chunks: ["navbar"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/login.html",
      filename: "login.html",
      chunks: ["navbar"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/sign-up.html",
      filename: "signup.html",
      chunks: ["navbar"],
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