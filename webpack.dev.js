const webpack = require('webpack');

const path = require('path');

const DIST_DIR = path.join(__dirname, '/functions/public');

const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      SERVER_URL: JSON.stringify('localhost'),
      DB_URL: JSON.stringify('localhost'),
      PORT: JSON.stringify('7100'),
    }),
  ],
  output: {
    filename: 'sdc-vectrex-chris-shipping-dev.js',
    path: DIST_DIR,
  },
});
