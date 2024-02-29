import { resolve } from "node:path"
// https://nuxt.com/docs/api/configuration/nuxt-confi
/*
 Make sure to rename the " /nuxt/preview " to the subdirectory where you are gonana upload the project. If you are uploading it in root then chang the /nuxt/preview to '/' or remove.
*/
export default defineNuxtConfig({
  nitro: {
    prerender: {
      routes: ['/user/1', '/user/2'],
      ignore: ['/dynamic']
    }
  },

  alias:{
    assets : "/<rootDir>/assets",
    cookie: resolve(__dirname, "node_modules/cookie")
  },
  modules: [
    '@nuxt/image',
    '@pinia/nuxt', 
  ],
  // Used to add the base path of url Example : https://www.spruko.com/ynex-nuxt
  app: {
    baseURL: '/nuxt/preview', // Replace with your desired base path
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: "/nuxt/preview/favicon.ico" },
        {
          rel:'stylesheet', 
            href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
            integrity:'sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==',
            crossorigin:'anonymous',
             referrerpolicy:'no-referrer'
        },
        {
          rel:'stylesheet',
          href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/brands.min.css',
          integrity:'sha512-8RxmFOVaKQe/xtg6lbscU9DU0IRhURWEuiI0tXevv+lXbAHfkpamD4VKFQRto9WgfOJDwOZ74c/s9Yesv3VvIQ==',
          crossorigin:'anonymous',
           referrerpolicy:'no-referrer'
        },
        {
          rel:'stylesheet',
          href:'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
          integrity:'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC',
          crossorigin:'anonymous'
        },
        {
          rel:'icon',
          type:'image/x-icon',
          href:'/favicon.ico'
        }
      ],
  },
  },
  ssr : false,

  build : { 
    transpile : ["vuetify", 'vue-countup-v3']
  },
  devtools: { enabled: true },
  plugins: [
    { src: "@/plugins/plugins.ts", mode: "client" },
],
  css : [
    '@mdi/font/css/materialdesignicons.css',
    'vuetify/styles/main.sass',
    '@/assets/css/icons.css',
    '@/assets/css/bootstrap.css',
    '@/assets/css/styles.css',
  ],
  // buildModules: [
  //   'nuxt-vite'
  // ],
  vite: {
    define: {
      'import.meta.env.BASE_URL': JSON.stringify('/nuxt/preview/'),
      'import.meta.env.googleMapsApiKey': JSON.stringify('AIzaSyCW16SmpzDNLsrP-npQii6_8vBu_EJvEjA')
    },
  },
})
