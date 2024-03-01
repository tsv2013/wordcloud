const HtmlWebpackPlugin = require('html-webpack-plugin');

const [ dev, prod ] = require('./webpack.config.js');

dev.plugins.push(new HtmlWebpackPlugin({
  inject: 'head',
  template: './public/index.html',
  scriptLoading: "blocking"
}));

module.exports = [dev];
