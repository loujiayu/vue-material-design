var webpack = require('webpack')
var path = require('path')

var projectRoot = path.resolve(__dirname, '../')

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'material-vue.min.js',
    library: 'material-vue',
    libraryTarget: 'umd'
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
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: false,
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
