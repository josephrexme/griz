const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './demo/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve('./demo'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, 'demo'),
    port: 3000
  }
};
