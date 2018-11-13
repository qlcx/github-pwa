module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.github.com',
        changeOrigin: true
      }
    }
  }
};
