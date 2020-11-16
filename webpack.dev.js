const path = require('path');

const DIST_DIR = path.join(__dirname, 'client/dist');

const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'sdc-vectrex-chris-shipping-dev.js',
    path: DIST_DIR,
  },
});
