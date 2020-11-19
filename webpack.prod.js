const webpack = require('webpack');

const path = require('path');

const DIST_DIR = path.join(__dirname, 'client/dist');

const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      SERVER_URL: JSON.stringify('52.9.126.252'),
      DB_URL: JSON.stringify('54.176.111.22'),
      PORT: JSON.stringify('7100'),
    }),
  ],
  output: {
    filename: 'sdc-vectrex-chris-shipping-prod.js',
    path: DIST_DIR,
  },
});
