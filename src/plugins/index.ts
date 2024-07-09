/*
 * @Author: lgq
 * @Date: 2024-07-09 10:53:13
 * @LastEditors: lgq
 * @LastEditTime: 2024-07-09 15:43:13
 * @Description: file content
 * @FilePath: \lu-admin\src\plugins\index.ts
 */
import Router from './Router'
import Vxe from './Vxe'
import type { App } from 'vue'

const init = (app: App) => {
    Router(app)
    Vxe(app)
}

export default init