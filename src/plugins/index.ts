/*
 * @Author: lgq
 * @Date: 2024-07-09 10:53:13
 * @LastEditors: lgq
 * @LastEditTime: 2024-11-01 18:20:03
 * @Description: file content
 * @FilePath: \lu-admin\src\plugins\index.ts
 */
import Store from './Store'
import Router from './Router'
import Vxe from './Vxe'
import Iconfont from './Iconfont'
import Axios from './Axios'
import PageContainer from '@/components/System/PageContainer/index.vue'
import { useRequestDevToolsPlugin } from 'vue-hooks-plus'
import type { App } from 'vue'

const init = (app: App) => {
    Store(app)
    Router(app)
    Vxe(app)
    Iconfont(app)
    Axios()
    app.use(useRequestDevToolsPlugin)
}

export const Register = (app: App) => {
    app.component('PageContainer', PageContainer)
}

export default init