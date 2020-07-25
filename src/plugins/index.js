import bootstrapVueComponents from './bootstrapVueComponents'
import featherIcons from './featherIcons'
import layouts from './layouts'
import components from './components'

export default {
    install (Vue) {
        Vue.use(bootstrapVueComponents)
        Vue.use(featherIcons)
        Vue.use(layouts)
        Vue.use(components)
    }
}
