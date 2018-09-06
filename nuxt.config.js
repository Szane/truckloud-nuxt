module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
  },
  css: [
    '~/plugins/bootstrap/dist/css/bootstrap.css',
    '~/plugins/swiper/src/css/swiper.css',
    '~/plugins/bootstrap-table/dist/bootstrap-table.min.css',
    '~/plugins/imageviewer/dist/viewer.css',
    '~/plugins/font-awesome/css/font-awesome.min.css'
    // '~/plugins/bootstrap3-dialog/dist/css/bootstrap-dialog.min.css'
  ],
  plugins: [
    { src: '~/plugins/element-ui', ssr: false },
    { src: '~/plugins/swiper/src/js/swiper.min.js', ssr: false },
    { src: '~/plugins/jquery/jquery-1.9.1.min.js', ssr: false },
    { src: '~/plugins/bootstrap/dist/js/bootstrap.min.js', ssr: false },
    { src: '~/plugins/bootstrap-table/dist/bootstrap-table.min.js', ssr: false },
    { src: '~/plugins/imageviewer/dist/viewer.min.js', ssr: false },
    // { src: '~/plugins/bootstrap3-dialog/dist/js/bootstrap-dialog.min.js', ssr: false },

  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['axios']
  }
}

