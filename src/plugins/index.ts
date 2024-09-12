/*
 * @Author: lgq
 * @Date: 2024-07-09 10:53:13
 * @LastEditors: lgq
 * @LastEditTime: 2024-09-11 16:46:07
 * @Description: file content
 * @FilePath: \lu-admin\src\plugins\index.ts
 */
import Store from './Store'
import Router from './Router'
import Vxe from './Vxe'
import Iconfont from './Iconfont'
import PageContainer from '@/components/System/PageContainer/index.vue'
import type { App } from 'vue'

const init = (app: App) => {
    Store(app)
    Router(app)
    Vxe(app)
    Iconfont(app)
}

export const Register = (app: App) => {
    app.component('PageContainer', PageContainer)
}

export default init