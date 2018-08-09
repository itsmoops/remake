const path = require("path");
const webpack = require("webpack");

const isProd = process.env.NODE_ENV === "production";

const config = {
  entry: isProd ? "./src/index.js" : "./src/dev.js",
  target: "web",
  mode: isProd ? "production" : "development",
  output: {
    path: path.join(__dirname, "dist"),
    libraryTarget: "umd",
    filename: "revamp.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
      styled: ["styled-components", "default"],
      css: ["styled-components", "css"]
    })
  ],
  resolve: {
    extensions: [".js"]
  }
};

if (!isProd) {
  config.devServer = {
    contentBase: path.join(__dirname, "src")
  };
  config.devtool = "inline-source-map";
}

module.exports = config;
