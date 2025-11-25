const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  // Configura el publicPath dependiendo del entorno
  
publicPath: process.env.NODE_ENV === 'production'
  ? '/pruebaagri/'  // ← A esto
  : '/',

  transpileDependencies: true,
  
  // Configuración para desarrollo
  devServer: {
    port: 8080,
    open: true,  // Abre automáticamente el navegador
    historyApiFallback: true  // Para Vue Router
  }
})