import type { App } from 'vue'
/*
 * @Author: lgq
 * @Date: 2025-04-25 17:00:54
 * @LastEditors: lgq
 * @LastEditTime: 2025-05-14 16:09:26
 * @Description: file content
 * @FilePath: \lu-admin\src\plugins\index.ts
 */
import { start as i18nStart } from './i18n'
import { start as piniaStart } from './pinia'
import { start as vxeTableStart } from './vxe-table'

export function start(app: App) {
  app.use(piniaStart)
  app.use(i18nStart)
  app.use(vxeTableStart)
}
