const path = require('path');

const DIST_DIR = path.join(__dirname, 'client/dist');

const { merge } = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'sdc-vectrex-chris-shipping-prod.js',
    path: DIST_DIR,
  },
});
