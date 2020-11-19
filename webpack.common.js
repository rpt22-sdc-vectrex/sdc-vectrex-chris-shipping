/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin');

const Dotenv = require('dotenv-webpack');

const SRC_DIR = path.join(__dirname, 'src');

module.exports = {
  entry: `${SRC_DIR}/client/index.jsx`,
  plugins: [
    new Dotenv(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
