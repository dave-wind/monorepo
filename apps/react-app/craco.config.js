const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')
const path = require('path')
module.exports = {
  eslint: {},
  webpack: {
    alias: {},
    plugins: {
      add: [
        new WindiCSSWebpackPlugin({
          virtualModulePath: 'src'
        })
      ]
    }
  }
}
