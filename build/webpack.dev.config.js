var webpack = require('webpack')
var path = require('path')

var projectRoot = path.resolve(__dirname, '../')

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: 'mtv.js',
    library: 'mtv',
    libraryTarget: 'umd'
    // publicPath: '/lib/',
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.json'],
    modulesDirectories: [
      'src',
      'node_modules'
    ],
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]'
        }
      }
    ]
  },
  // devtool: '#source-map',
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
}
