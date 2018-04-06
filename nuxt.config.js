const path = require('path')

// 后端proxy参数
const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:3000'
const PROXY_API_URL = process.PROXY_API_URL || 'http://127.0.0.1:8080'

module.exports = {
  srcDir: 'app/',
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'pigutu美女图片，收集精美的美女图片，包括明星美女写真图片专辑，大学校花美女贴图，性感车模写真等各类最新最好看的性感美女图片。' }
    ],
    script: [
      { src: 'http://img.pigutu.com/js/pigutupic.js' }
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
   * Modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: [
    ['/api', {
      target: PROXY_API_URL
    }]
  ],
  axios: {
    baseURL: BASE_URL
  },
  /*
  ** Build configuration
  */
  dev: (process.env.NODE_ENV !== 'production'),
  build: {
    extractCSS: true,
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
