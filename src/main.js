// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Plugins from './plugins'
import distanceInWords from 'date-fns/distance_in_words'
import format from 'date-fns/format'
const locale = require('date-fns/locale/pt')

import '~/assets/styles.scss'

const dateOptions = { addSuffix: true, locale }

export default function (Vue, { router, head, isClient }) {
    Vue.prototype.$year = new Date().getFullYear()

    head.meta.push({
        name: 'robots',
        content: 'index,follow'
    })
    head.meta.push({
        name: 'keywords',
        content: [
            'cartola',
            'cartola-fc',
            'agregador',
            'estatísticas',
            'campeonato-brasileiro',
            'brasileirão',
            'serie-a'
        ].join(',')
    })

    // Twitter
    head.meta.push({
        name: 'twitter:card',
        content: 'summary'
    })
    head.meta.push({
        name: 'twitter:creator',
        content: '@atilacamurca'
    })

    // Open Graph
    head.meta.push({
        key: 'og:image',
        name: 'og:image',
        content: process.env.GRIDSOME_SITE_URL + '/img/og-img.png'
    })

    // Google Site Verification
    head.meta.push({
        key: 'google-site-verification',
        name: 'google-site-verification',
        content: process.env.GRIDSOME_GOOGLE_SITE_VERIFICATION
    })

    head.meta.push({
        key: 'og:locale',
        name: 'og:locale',
        content: 'pt_BR'
    })

    Vue.use(Plugins)

    Vue.filter('fromNow', (value) => {
        if (!value) return ''
        value = value.toString()
        return distanceInWords(new Date(), value, dateOptions)
    })
    Vue.filter('diaMes', value => {
        if (!value) return ''
        value = value.toString()
        return format(value, 'ddd DD MMM', { locale })
    })
    Vue.filter('horario', value => {
        if (!value) return ''
        value = value.toString()
        return format(value, 'HH:mm', { locale })
    })

    router.beforeEach((to, _from, next) => {
        head.meta.push({
            key: 'og:url',
            name: 'og:url',
            content: process.env.GRIDSOME_SITE_URL + to.path,
        })
        next()
    })

    head.link.push({
        key: 'manifest',
        rel: 'manifest',
        href: Vue.prototype.$url('/manifest.json')
    })

    head.meta.push({
        key: 'theme-color',
        name: 'theme-color',
        content: '#f8f9fa'
    })
}
