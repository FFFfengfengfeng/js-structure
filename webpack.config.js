const path = require('path')
const DashBoardPlugin = require('webpack-dashboard/plugin')

module.exports = {
  mode: 'development',

  context: path.join(__dirname, './src'),

  entry: './index.js',

  output: {
    filename: 'bundle.js'
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
    publicPath: '/dist',
    port: 3000
  },

  plugins: [
    new DashBoardPlugin()
  ]
}