// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import BootstrapVue from 'bootstrap-vue'
import distanceInWords from 'date-fns/distance_in_words'
import format from 'date-fns/format'
var locale = require('date-fns/locale/pt')

import '~/assets/styles.scss'

const dateOptions = { addSuffix: true, locale }

export default function (Vue, { router, head, isClient }) {
    // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)
    Vue.use(BootstrapVue)
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

}
