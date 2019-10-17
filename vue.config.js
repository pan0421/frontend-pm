const path = require('path')

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'], 
      alias: { 
        '@': resolve('src'),
        'components': resolve('src/components'),
        'pages': resolve('src/pages'),
      }
    }
  },
  
  devServer: {
    proxy: {
      '/api': { 
        target: 'http://localhost:4001', 
        changeOrigin: true, 
        pathRewrite: {
          '^/api': ''
        }
      }  
    }
  }
}