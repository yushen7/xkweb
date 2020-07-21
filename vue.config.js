module.exports = {
  lintOnSave: false,
  //关闭source-map
  productionSourceMap: false,
  devServer: {
      proxy: {
        '/api/*': {
          target: 'https://xingkong.gqt.gcu.edu.cn/mobile',
          changeOrigin: true,
          secure: false
        }
      }
  }
}
