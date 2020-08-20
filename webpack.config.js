const path = require('path');
module.exports = {
  mode: 'development',
  entry:'./src/index.js',
  output: {
    filename: "ttreit-shipping.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};