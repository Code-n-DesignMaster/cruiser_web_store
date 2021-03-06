module.exports = {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: 'cruiser_web_office',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Nuxt.js project'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
            },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css?family=Montserrat:400, 500,600,800'
            },
        ],
    },
    /*
    ** Customize the progress bar color
    */
    loading: 'components/loading.vue',
    /*
    ** Build configuration
    */
    modules: [
        // Simple usage
        'cookie-universal-nuxt',

        // With options
        ['cookie-universal-nuxt', { alias: 'cookiz' }],
    ],
    plugins: [
        { src: './plugins/carousel', ssr: false },
        { src: './plugins/star'},
        { src: './plugins/vue-resource'},
        { src: './plugins/vuetify'}
    ],
    build: {
        /*
        ** Run ESLint on save
        */
        extend(config, {isDev, isClient}) {
            config.resolve.alias['vue'] = 'vue/dist/vue.common'
        }
    }
}

