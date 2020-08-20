const path = require('path');
module.exports = {
  mode: 'development',
  entry:'./src/index.js',
  output: {
    filename: "ttreit-shipping.js",
    path: path.resolve(__dirname, "dist")
  }
};