const path = require('path');

// eslint-disable-next-line no-unused-vars
const config = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 8080,
    publicPath: '/',
    contentBase: path.join(__dirname, 'dist'),
  },
};

module.exports = config;
