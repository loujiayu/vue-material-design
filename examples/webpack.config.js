var webpack = require('webpack')
var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    './main.js'
  ],
  output: {
    path: './build',
    filename: './bundle.js'
  },
  devServer:{
    contentBase: 'examples/src/build',  //Relative directory for base of server
    devtool: 'eval',
    hot: true,        //Live-reload
    inline: true,
    port: 8000,        //Port Number
    host: 'localhost'  //Change to '0.0.0.0' for external facing server
  },
  module: {
    // avoid webpack trying to shim process
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        // excluding some local linked packages.
        // for normal use cases only node_modules is needed.
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  devtool: '#source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new TransferWebpackPlugin([{from: 'src'}], __dirname)
  ]
}
