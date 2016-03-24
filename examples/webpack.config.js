var webpack = require('webpack')
var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    'font-awesome-webpack!./font/font-awesome.config.js',
    './main.css',
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
    port: 3000,        //Port Number
    host: 'localhost'  //Change to '0.0.0.0' for external facing server
  },
  module: {
    // avoid webpack trying to shim process
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.less$/, loader: 'style!css!autoprefixer!less' },
      { test: /\.scss$/, loader: 'style!css!autoprefixer!sass' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
    ]
  },
  devtool: '#source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new TransferWebpackPlugin([{from: 'src'}], __dirname)
  ]
}
