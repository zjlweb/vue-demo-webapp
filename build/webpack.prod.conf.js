var webpack = require('webpack')
var config = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')
config.devtool = 'source-map'

config.vue.loaders = {
  js: 'babel!eslint',
  // http://vuejs.github.io/vue-loader/configurations/extract-css.html
  css: ExtractTextPlugin.extract('style-loader', 'css-loader'),
  less: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader'),
  sass: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
  stylus: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
}
config.output = {
    path: path.resolve(__dirname, '../dist/static'),
    publicPath: '/static/',  // 修改cdn路径
    filename: 'build.js'
  }
// http://vuejs.github.io/vue-loader/workflow/production.html
config.plugins = (config.plugins || []).concat([
  new ExtractTextPlugin('style.css'),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin()
])

module.exports = config
