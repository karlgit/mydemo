const path = require('path');
const webpack = require('webpack');
const defaultConfig = require('./webpack.base');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(defaultConfig, {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  devtool: "source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  devServer: {
    // publicPath: "/assets/",
    // contentBase: '../dist',
    compress: true,
    port: 9000,
    hot: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    },
    // stats: 'errors-only',
    after: function (app, server) {
      console.log('\n已经完成！！！')
    }
  },

  plugins: [new HtmlWebpackPlugin({
    title: 'myDemo',
    template: './public/index.html',
    minify: {
      removeAttributeQuotes: true,
      collapseWhitespace: true
    },
    hash: true
  }),
  new webpack.HotModuleReplacementPlugin()]
});