import { ChevronDownIcon, ChevronUpIcon } from 'vue-feather-icons'

export default {
    install (Vue) {
        Vue.component('chevron-down-icon', ChevronDownIcon)
        Vue.component('chevron-up-icon', ChevronUpIcon)
    }
}
