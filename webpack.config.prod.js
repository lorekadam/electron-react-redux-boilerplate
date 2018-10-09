// const webpack = require('webpack');
// const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// module.exports = {
//   entry: [path.resolve(__dirname) + '/src/index.js'],
//   output: {
//     path: path.resolve(__dirname) + '/dist',
//     filename: 'bundle.js',
//     publicPath: '/'
//   },
//   resolveLoader: {
//     modules: [path.join(__dirname, 'node_modules')]
//   },
//   resolve: {
//     extensions: ['.js', '.jsx']
//   },
//   devtool: 'source-map',
//   module: {
//     loaders: [
//       {
//         test: /(\.js|\.jsx)$/,
//         exclude: /(node_modules|bower_components)/,
//         use: [
//           {
//             loader: 'babel-loader',
//             options: {
//               presets: ['react', 'es2015', 'stage-0', 'stage-2'],
//               plugins: [
//                 'react-html-attrs',
//                 'transform-class-properties',
//                 'babel-plugin-transform-decorators-legacy'
//               ]
//             }
//           }
//         ]
//       },
//       {
//         test: /\.scss$/,
//         use: ExtractTextPlugin.extract({
//           use: [
//             {
//               loader: 'css-loader'
//             },
//             {
//               loader: 'sass-loader'
//             }
//           ]
//         })
//       }
//     ]
//   },
//   plugins: [
//     new ExtractTextPlugin({
//       filename: getPath => {
//         return getPath('css/styles.css').replace('css', 'css');
//       }
//     }),
//     new UglifyJSPlugin({
//       sourceMap: true
//     })
//   ]
// };

const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: [path.resolve(__dirname) + '/src/index.js'],
  output: {
    path: path.resolve(__dirname) + '/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')]
  },
  target: 'electron-renderer',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  stats: {
    warnings: false
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCssAssetsPlugin({})
    ]
  },
  devtool: 'source-map',
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
                'transform-decorators-legacy'
              ]
            }
          }
        ]
      },
      {
        test: /(\.css|\.scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/bundle.css'
    })
  ]
};
