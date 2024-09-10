import { createPinia } from 'pinia'
import type { App } from 'vue'

const pinia = createPinia()

const init = async (app: App<Element>) => {
    app.use(pinia)
}

export default init