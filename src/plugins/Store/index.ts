import { createPinia } from 'pinia'
import type { App } from 'vue'

const pinia = createPinia()

const init = async (app: App<Element>) => {
    app.use(pinia)
}

export default init
export { default as useLayoutMenu } from './modules/menu'
export { default as useUserStore } from './modules/user'
export { default as useInterfaces } from './modules/axios'