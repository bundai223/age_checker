// vue.config.js
module.exports = {
  // options
  publicPath: process.env.NODE_ENV === 'production'
    ? '/age_checker/'
    : '/',
  devServer: {
    host: '0.0.0.0',
    public: '0.0.0.0:8080',
    disableHostCheck: true,
    proxy: {
      '/app': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        ws: true
      }
    }
  }
}
