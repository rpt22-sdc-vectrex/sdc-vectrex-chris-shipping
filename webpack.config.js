const path = require('path');
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'public/src/index.jsx'),
  output: {
    filename: 'ttreit-shipping.js',
    path: path.join(__dirname, '/public/dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};