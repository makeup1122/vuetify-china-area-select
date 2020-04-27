const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true, // 绕过host检测
    compress: true,
    host: '0.0.0.0', // 微信外网调试用
    port: 8088
  },
  configureWebpack: {
    plugins: [
      new VuetifyLoaderPlugin()
    ],
  },
}