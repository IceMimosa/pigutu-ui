const path = require('path')

module.exports = {
  srcDir: 'app/',
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
  loading: { color: '#3B8070' },
  /*
  ** Global css
  */
  css: [
    '~assets/css/main.scss',
    'element-ui/lib/theme-default/index.css'
  ],
  /**
   * Module
   */
  module: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  // axios
  axios: {},
  // proxy
  proxy: {
    '/api/**': {
      target: 'http://127.0.0.1:8080'
    }
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
      config.resolve.alias['compass'] = path.resolve(__dirname, 'compass-mixins/lib/compass')
    }
  }
  // vendor: [],
  // extractCSS: true,
  // babel: {
  //   plugins: [
  //     ['component', {
  //       libraryName: 'element-ui',
  //       styleLibraryName: 'theme-default'
  //     }]
  //   ]
  // }
}
