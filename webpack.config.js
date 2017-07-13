const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './docs/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve('./docs'),
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
    contentBase: path.join(__dirname, 'docs'),
    port: 3000
  }
};
