var path  = require('path')
module.exports = {
  // 开发配置
  devServer: {
    port: 9999,
    // 代理
    // proxy: {
    //   '/api': {
    //     target: '',
    //     changeOrigin: true,
    //     sw: true
    //   }
    // }
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  },
}
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/less/var.module.less'),
      ],
    })
}
