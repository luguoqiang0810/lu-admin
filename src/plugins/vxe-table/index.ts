import type { App } from 'vue'
/*
 * @Author: lgq
 * @Date: 2025-04-25 17:52:19
 * @LastEditors: lgq
 * @LastEditTime: 2025-05-06 16:27:26
 * @Description: file content
 * @FilePath: \lu-admin\src\plugins\vxe-table\index.ts
 */
import {
  VxeColumn,
  VxeTable,
} from 'vxe-table'

export function start(app: App) {
  app.use(VxeTable)
  app.use(VxeColumn)
}
