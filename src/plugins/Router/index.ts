/*
 * @Author: lgq
 * @Date: 2024-07-09 15:32:22
 * @LastEditors: lgq
 * @LastEditTime: 2024-07-24 11:30:07
 * @Description: file content
 * @FilePath: \lu-admin\src\plugins\Router\index.ts
 */
import { createWebHistory, createWebHashHistory, createRouter } from 'vue-router'
import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router';
import Setting from '@/setting/index'

const HomeView = () => import('@/components/System/Layout/Main.vue')
const PageView = () => import('@/components/System/Layout/Page.vue')
const Workplace = () => import('@/views/workPlace/index.vue')
const DonNotHaveAccess = () => import('@/views/exception/403.vue')
const DoesNotExist = () => import('@/views/exception/404.vue')
const ServerError = () => import('@/views/exception/500.vue')

const { history } = Setting

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'MainLayout',
        component: HomeView,
        children: [
            {
                path: 'workPlace',
                name: 'WorkPlace',
                component: Workplace
            },
            {
                path: 'exception',
                name: 'Exception',
                component: PageView,
                children: [
                    {
                        path: '403',
                        name: '403',
                        component: DonNotHaveAccess
                    },
                    {
                        path: '404',
                        name: '404',
                        component: DoesNotExist
                    },
                    {
                        path: '500',
                        name: '500',
                        component: ServerError
                    }
                ]
            }
        ]
    },
    {
        path: '/403',
        name: '403',
        component: DonNotHaveAccess
    },
    {
        path: '/404',
        name: '404',
        component: DoesNotExist
    },
    {
        path: '/500',
        name: '500',
        component: ServerError
    }
]

const router = createRouter({
    history: history === 'html5' ? createWebHistory() : createWebHashHistory(),
    routes
})

const init = (app: App) => {
    app.use(router)
}

export default init

