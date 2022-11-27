'use strict';

const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');
const PATHS = require('./paths');

// loading babel loaders

// Merge webpack configuration files
const config = (env, argv) =>
  merge(common, {
    entry: {
      popup: PATHS.src + '/popup.js',
      contentScript: PATHS.src + '/contentScript.js',
      background: PATHS.src + '/background.js',
    },
    module: {
      rules: [{
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
              loader: 'babel-loader?cacheDirectory=true',
          }
      }]
    },
    devtool: argv.mode === 'production' ? false : 'source-map',
  });

module.exports = config;

