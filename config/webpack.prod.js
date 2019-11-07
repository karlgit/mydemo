const path = require('path');
const webpack = require('webpack');
const defaultConfig = require('./webpack.base');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(defaultConfig,
  {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
      filename: '[name].[hash].bundle.js',
      path: path.resolve(__dirname, '../dist')
    },
    devtool: 'none',
    plugins: [new HtmlWebpackPlugin({
      title: 'myDemo',
      template: './public/index.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true
      },
      // hash: true
    })]
  }
);