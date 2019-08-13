import DefaultLayout from '~/layouts/Default.vue'
import HeroLayout from '~/layouts/HeroLayout.vue'

export default {
    install(Vue) {
        Vue.component('Layout', DefaultLayout)
        Vue.component('HeroLayout', HeroLayout)
    }
}
