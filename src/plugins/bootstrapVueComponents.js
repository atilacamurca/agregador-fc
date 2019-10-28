import {
    LayoutPlugin,
    CardPlugin,
    NavbarPlugin,
    ListGroupPlugin,
    BadgePlugin,
    TooltipPlugin,
    FormGroupPlugin,
    FormRadioPlugin
} from 'bootstrap-vue'

import DoughnutChart from '@/components/charts/DoughnutChart'
import 'chartjs-plugin-labels'

export default {
    install (Vue) {
        Vue.use(LayoutPlugin)
        Vue.use(CardPlugin)
        Vue.use(NavbarPlugin)
        Vue.use(ListGroupPlugin)
        Vue.use(BadgePlugin)
        Vue.use(TooltipPlugin)
        Vue.use(FormGroupPlugin)
        Vue.use(FormRadioPlugin)
        Vue.component('doughnut-chart', DoughnutChart)
    }
}
