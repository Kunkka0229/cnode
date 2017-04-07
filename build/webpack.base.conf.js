var path = require('path');
var utils = require('./utils');
var config = require('../config');
var vueLoaderConfig = require('./vue-loader.conf');


function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js' // 入口文件
  },
  output: {
    path: config.build.assetsRoot, // 到处目录的绝对路径
    filename: '[name].js', // 导出文件的文件名
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath // 生产模式或开发模式下html、js等文件内部引用的公共路径
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],  // 自动解析确定的拓展名,使导入模块时不带拓展名
    alias: { // 创建import或require的别名
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig // options是对vue-loader做的额外选项配置
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')] // 必须处理包含src和test文件夹
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
