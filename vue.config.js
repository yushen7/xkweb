module.exports = {
  lintOnSave: false,
  devServer: {
      proxy: {
        '/api/*': {
          target: 'http://kuoteo.com',
          changeOrigin: true
        }
      }
  }
}
