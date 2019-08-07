import {
    LayoutPlugin,
    CardPlugin,
    NavbarPlugin,
    ListGroupPlugin,
    BadgePlugin,
    TooltipPlugin
} from 'bootstrap-vue'

export default {
    install (Vue) {
        Vue.use(LayoutPlugin)
        Vue.use(CardPlugin)
        Vue.use(NavbarPlugin)
        Vue.use(ListGroupPlugin)
        Vue.use(BadgePlugin)
        Vue.use(TooltipPlugin)
    }
}
