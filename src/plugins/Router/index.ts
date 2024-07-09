/*
 * @Author: lgq
 * @Date: 2024-07-09 15:32:22
 * @LastEditors: lgq
 * @LastEditTime: 2024-07-09 16:52:40
 * @Description: file content
 * @FilePath: \lu-admin\src\plugins\Router\index.ts
 */
import type { App } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'

const HomeView = () => import('@/components/System/Layout/Main.vue')
const routes = [
    {
        path: '/',
        component: HomeView,
        children: []
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

const init = (app: App) => {
    app.use(router)
}

export default init

