/*
 * @Author: lgq
 * @Date: 2024-08-23 16:07:39
 * @LastEditors: lgq
 * @LastEditTime: 2024-09-03 10:27:14
 * @Description: file content
 * @FilePath: \lu-admin\src\plugins\Router\routes.ts
 */
import { asyncRoutes } from './utils'
import Setting from '@/setting/index'
import { AppRouteModule } from '@/types/index'

const HomeView = () => import('@/components/System/Layout/Main.vue')
const Login = () => import('@/views/login/index.vue')
const Exception = () => import('@/components/System/Exception/index.vue')

const { redirect } = Setting.router

export const routes: AppRouteModule[] = [
    {
        path: '/',
        name: 'Root',
        component: HomeView,
        redirect: redirect,
        children: asyncRoutes,
        meta: {
            title: 'Root'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            title: '登录'
        }
    },
    {
        path: '/:path(.*)*',
        name: 'PageNotFound',
        component: Exception,
        meta: {
            title: '页面错误',
            permission: '*'
          }
    }
]