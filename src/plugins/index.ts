/*
 * @Author: lgq
 * @Date: 2024-07-09 10:53:13
 * @LastEditors: lgq
 * @LastEditTime: 2024-07-17 18:21:24
 * @Description: file content
 * @FilePath: \lu-admin\src\plugins\index.ts
 */
import Store from './Store'
import Router from './Router'
import Vxe from './Vxe'
import Iconfont from './Iconfont'
import type { App } from 'vue'

const init = (app: App) => {
    Store(app)
    Router(app)
    Vxe(app)
    Iconfont(app)
}

export default init