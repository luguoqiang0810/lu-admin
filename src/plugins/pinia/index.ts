import type { App } from 'vue'
/*
 * @Author: lgq
 * @Date: 2025-04-25 17:48:08
 * @LastEditors: lgq
 * @LastEditTime: 2025-04-25 17:50:18
 * @Description: file content
 * @FilePath: \lu-admin\src\plugins\pinia\index.ts
 */
import { createPinia } from 'pinia'

const pinia = createPinia()

export function start(app: App) {
  app.use(pinia)
}
