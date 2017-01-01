var path = require('path')
var config = require('./config')
var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var version = require('../package.json').version
var env = config.build.env
var banner =
  "/**\n" +
  " * daojia-component v" + version + "\n" +
  " * https://github.com/sunpeijun/npmpackage\n" +
  " * MIT License\n" +
  " */\n"

var webpackConfig = merge(baseWebpackConfig, {
  entry: path.resolve(__dirname, '../src/install.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/lib/',
    filename: 'component.js',
    library: 'component',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.build.productionSourceMap, extract: true })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  vue: {
    loaders: utils.cssLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: false    // css 是否独立打包
    })
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // extract css into its own file
    new ExtractTextPlugin(utils.assetsPath('component.css')),
    new webpack.BannerPlugin(banner, {
      raw: true
    })
  ]
})


module.exports = webpackConfig
