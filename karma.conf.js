var webpack = require('webpack');

module.exports = function (config) {
  config.set({

    browsers: ['PhantomJS'],

    singleRun: true,

    frameworks: [ 'mocha' ],

    files: [
      'tests.webpack.js'
    ],

    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },

    reporters: [ 'mocha' ],

    plugins: [
      require("karma-webpack"),
      require("karma-mocha"),
      require("karma-mocha-reporter"),
      require("karma-phantomjs-launcher"),
      require("karma-sourcemap-loader")
    ],

    webpack: {
      devtool: 'inline-source-map',
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
      resolve: {
        modulesDirectories: [
          'src',
          'node_modules'
        ],
        extensions: ['', '.json', '.js', 'vue']
      },
      plugins: [
        new webpack.IgnorePlugin(/\.json$/),
        new webpack.NoErrorsPlugin(),
      ]
    },

    webpackServer: {
      noInfo: true
    }

  });
};
