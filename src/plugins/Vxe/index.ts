/*
 * @Author: lgq
 * @Date: 2024-07-09 10:53:13
 * @LastEditors: lgq
 * @LastEditTime: 2024-07-17 17:44:30
 * @Description: file content
 * @FilePath: \lu-admin\src\plugins\Vxe\index.ts
 */
import type { App } from 'vue'

import {
    VxeUI,

    VxeLayoutAside,
    VxeLayoutBody,
    VxeLayoutContainer,
    VxeLayoutFooter,
    VxeLayoutHeader,
    VxeImage

} from 'vxe-pc-ui'

// import {
//     VxeTable,
//     VxeColumn,
//     VxeColgroup,
//     VxeGrid,
//     VxeToolbar
// } from 'vxe-table'

// 导入主题变量，也可以重写主题变量
import 'vxe-table/styles/cssvar.scss'
import 'vxe-pc-ui/styles/cssvar.scss'

// 导入默认的语言
import zhCN from 'vxe-pc-ui/lib/language/zh-CN'

VxeUI.setI18n('zh-CN', zhCN)
VxeUI.setLanguage('zh-CN')

const LazyVxeUI = (app: App) => {
    app.use(VxeLayoutAside)
    app.use(VxeLayoutBody)
    app.use(VxeLayoutContainer)
    app.use(VxeLayoutFooter)
    app.use(VxeLayoutHeader)
    app.use(VxeImage)
}

// const LazyVxeTable = (app: App) => {
//     console.log(app);
    
//     app.use(VxeTable)
//     app.use(VxeColumn)
//     app.use(VxeColgroup)
//     app.use(VxeGrid)
//     app.use(VxeToolbar)
// }

const init = (app: App) => {
    app
    .use(LazyVxeUI)
    // .use(LazyVxeTable)
}
export default init