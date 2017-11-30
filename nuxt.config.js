const path = require('path')

module.exports = {
  srcDir: 'app/',
  env: {
    SERVER: process.env.SERVER || 'localhost',
    PORT: process.env.PORT || 8080
  },
  /*
  ** Headers of the page
  */
  head: {
    title: '~(≧▽≦)/~屁股啦',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'http://at.alicdn.com/t/font_429841_kq3juc9bl3c2qpvi.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#6CF' },
  /*
  ** Global css
  */
  css: [
    '~assets/css/main.scss',
    'element-ui/lib/theme-default/index.css'
  ],
  /**
   * plugins
   */
  plugins: [
    { src: '~plugins/axios' }
  ],
  /**
   * Module
   */
  module: [ ],
  /*
  ** Build configuration
  */
  dev: (process.env.NODE_ENV !== 'production'),
  build: {
    extractCSS: true,
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
  // babel: {
  //   plugins: [
  //     ['component', {
  //       libraryName: 'element-ui',
  //       styleLibraryName: 'theme-default'
  //     }]
  //   ]
  // }
}
