
const purgecss = require('@fullhuman/postcss-purgecss')
const tailwind = require('tailwindcss')

const postcssPlugins = [
  tailwind(),
]

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss())

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
}

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Branding - Greatest Media',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A full service branding and marketing agency that help E-commerce and retail companies achieve the growth that they want.' },
      { name: 'google-site-verification', content: 'gyNBpTIyKelNqYqAVFAkcmtprcDKBUvxH1bKdl9uhqU'},
    
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png'},
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
 
  plugins: [
    
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-purgecss','nuxt-svg'
  ],
  purgeCSS: {
    mode: 'postcss',
    whitelist: ['display', 'group-hover:flex'],
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js',
        
      },
     
    },
   
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
