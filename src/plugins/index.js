import bootstrapVueComponents from './bootstrapVueComponents'
import layouts from './layouts'
import components from './components'

export default {
    install (Vue) {
        Vue.use(bootstrapVueComponents)
        Vue.use(layouts)
        Vue.use(components)
    }
}
