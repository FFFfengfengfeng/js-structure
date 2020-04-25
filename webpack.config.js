const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  context: path.join(__dirname, './src'),

  entry: './index.js',

  output: {
    filename: 'app.[hash].js',
    path: path.join(__dirname,'./dist')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      }
    ]
  },

  devServer: {
    publicPath: '/',
    port: 3000,
    hot: true,
  },

  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './index.html'),
      inject: true
    })
  ]
}