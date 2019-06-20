// vue.config.js
const port = 8080
const host = '0.0.0.0'

module.exports = {
  // options
  publicPath: process.env.NODE_ENV === 'production'
    ? '/age_checker/'
    : '/',
  devServer: {
    host: host,
    port: port,
    public: `${host}:${port}`,
    disableHostCheck: true,
    proxy: {
      '/app': {
        target: `http://localhost:${port}`,
        changeOrigin: true,
        ws: true
      }
    }
  }
}
