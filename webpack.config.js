const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isProd = process.env.NODE_ENV === "production";

const config = {
  entry: isProd ? "./src/index.js" : "./src/dev.js",
  target: "web",
  mode: isProd ? "production" : "development",
  output: {
    path: path.join(__dirname, "dist"),
    libraryTarget: "umd",
    filename:  isProd ? "revival-ui.js" : "revival-ui.js"
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
  resolve: {
    extensions: [".js"]
  }
};

if (isProd) {
  config.plugins = [
    new BundleAnalyzerPlugin()
  ]
  config.externals = {
    react: 'React',
    'styled-components': 'styled'
  }
} else {
  config.devServer = {
    contentBase: path.join(__dirname, "src")
  };
  config.devtool = "inline-source-map";
}

module.exports = config;
