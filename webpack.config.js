const path = require('path');
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'public/src/index.jsx'),
  output: {
    filename: 'ttreit-shipping.js',
    path: path.resolve(__dirname, '/public/dist')
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