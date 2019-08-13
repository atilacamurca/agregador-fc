import bootstrapVueComponents from './bootstrapVueComponents'
import layouts from './layouts'

export default {
    install (Vue) {
        Vue.use(bootstrapVueComponents)
        Vue.use(layouts)
    }
}
