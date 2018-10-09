const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [ path.resolve(__dirname) + '/src/index.js'],
  output: {
    path: path.resolve(__dirname) + '/dist',
    filename: 'renderer.js',
    publicPath: '/'
  },
  target: 'electron-renderer',
  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015', 'stage-0', 'stage-2'],
              plugins: [
                'react-html-attrs',
                'transform-class-properties',
                'babel-plugin-transform-decorators-legacy'
              ]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            } // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            } // compiles Sass to CSS
          }
        ]
      }
    ]
  }
};
