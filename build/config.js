var path = require('path')

module.exports = {
  build: {
    env: '"development"',
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: '/',
    assetsPublicPath: '/',
    productionSourceMap: false,
  },
  dev: {
    env: '"production"',
    port: 8080,
    assetsSubDirectory: '/',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false
  }
}
