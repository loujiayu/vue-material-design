var webpack = require('webpack')
var cssLoaders = require('./css-loaders')
var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  entry: [
    'font-awesome-webpack!./font/font-awesome.config.js',
    './main.css',
    './main.js'
  ],
  output: {
    path: './examples/build',
    filename: './bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.json'],
    modulesDirectories: [
      'dist',
      'components',
      'node_modules'
    ],
  },
  module: {
    // avoid webpack trying to shim process
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: {compact: false} },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
    ]
  },
  vue: {
    loaders: cssLoaders({
      sourceMap: false,
      extract: false
    })
  },
  devtool: '#source-map',
  plugins: [
    new webpack.NoErrorsPlugin(),
    new TransferWebpackPlugin([{from: 'src'}, {from: 'node_modules/font-awesome'}])
  ]
}
