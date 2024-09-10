/*
 * @Author: lgq
 * @Date: 2024-07-09 15:32:22
 * @LastEditors: lgq
 * @LastEditTime: 2024-09-09 17:38:15
 * @Description: file content
 * @FilePath: \lu-admin\src\plugins\Router\index.ts
 */
import { createWebHistory, createWebHashHistory, createRouter } from 'vue-router'
import Setting from '@/setting/index'
import { routes } from './routes'
import { setupRouterGuard } from './utils'
import type { App } from 'vue'

const { history } = Setting.router

const router = createRouter({
    history: history === 'html5' ? createWebHistory() : createWebHashHistory(),
    routes
})

const init = async (app: App<Element>) => {
    // 注册路由
    await app.use(router)
    // 路由守卫
    await setupRouterGuard(router)
}

export default init