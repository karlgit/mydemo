const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'myDemo',
    template: './public/index.html',
    minify: {
      removeAttributeQuotes: true,
      collapseWhitespace: true
    },
    hash: true
  })]
};