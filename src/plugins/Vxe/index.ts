/*
 * @Author: lgq
 * @Date: 2024-07-09 10:53:13
 * @LastEditors: lgq
 * @LastEditTime: 2024-07-09 17:51:55
 * @Description: file content
 * @FilePath: \lu-admin\src\plugins\Vxe\index.ts
 */
import type { App } from 'vue'

import {
    VxeUI,

    // VxeAnchor,
    // VxeAnchorLink,
    // VxeBreadcrumb,
    // VxeBreadcrumbItem,
    // VxeButton,
    // VxeButtonGroup,
    // VxeCalendar,
    // VxeCard,
    // VxeCheckbox,
    // VxeCheckboxGroup,
    // VxeCol,
    // VxeCollapse,
    // VxeCollapsePane,
    // VxeDatePicker,
    // VxeDrawer,
    // VxeFlowDesign,
    // VxeFlowView,
    // VxeForm,
    // VxeFormDesign,
    // VxeFormGather,
    // VxeFormItem,
    // VxeFormView,
    // VxeIcon,
    // VxeInput,
    VxeLayoutAside,
    VxeLayoutBody,
    VxeLayoutContainer,
    VxeLayoutFooter,
    VxeLayoutHeader,
    // VxeLink,
    // VxeListDesign,
    // VxeListView,
    // VxeList,
    // VxeLoading,
    // VxeMenu,
    // VxeModal,
    // VxeNumberInput,
    // VxeOptgroup,
    // VxeOption,
    // VxePager,
    // VxePasswordInput,
    // VxePrint,
    // VxePulldown,
    // VxeRadio,
    // VxeRadioButton,
    // VxeRadioGroup,
    // VxeRow,
    // VxeSelect,
    // VxeSwitch,
    // VxeTabPane,
    // VxeTabs,
    // VxeTextarea,
    // VxeTip,
    // VxeTooltip,
    // VxeTree,
    // VxeTreeSelect,
    // VxeUpload,
} from 'vxe-pc-ui'

import {
    // VxeTable,
    // VxeColumn,
    // VxeColgroup,
    // VxeGrid,
    // VxeToolbar
} from 'vxe-table'

// 导入主题变量，也可以重写主题变量
import 'vxe-table/styles/cssvar.scss'
import 'vxe-pc-ui/styles/cssvar.scss'

// 导入默认的语言
import zhCN from 'vxe-pc-ui/lib/language/zh-CN'

VxeUI.setI18n('zh-CN', zhCN)
VxeUI.setLanguage('zh-CN')

const LazyVxeUI = (app: App) => {
    // app.use(VxeAnchor)
    // app.use(VxeAnchorLink)
    // app.use(VxeBreadcrumb)
    // app.use(VxeBreadcrumbItem)
    // app.use(VxeButton)
    // app.use(VxeButtonGroup)
    // app.use(VxeCalendar)
    // app.use(VxeCard)
    // app.use(VxeCheckbox)
    // app.use(VxeCheckboxGroup)
    // app.use(VxeCol)
    // app.use(VxeCollapse)
    // app.use(VxeCollapsePane)
    // app.use(VxeDatePicker)
    // app.use(VxeDrawer)
    // app.use(VxeFlowDesign)
    // app.use(VxeFlowView)
    // app.use(VxeForm)
    // app.use(VxeFormDesign)
    // app.use(VxeFormGather)
    // app.use(VxeFormItem)
    // app.use(VxeFormView)
    // app.use(VxeIcon)
    // app.use(VxeInput)
    app.use(VxeLayoutAside)
    app.use(VxeLayoutBody)
    app.use(VxeLayoutContainer)
    app.use(VxeLayoutFooter)
    app.use(VxeLayoutHeader)
    // app.use(VxeLink)
    // app.use(VxeListDesign)
    // app.use(VxeListView)
    // app.use(VxeList)
    // app.use(VxeLoading)
    // app.use(VxeMenu)
    // app.use(VxeModal)
    // app.use(VxeNumberInput)
    // app.use(VxeOptgroup)
    // app.use(VxeOption)
    // app.use(VxePager)
    // app.use(VxePasswordInput)
    // app.use(VxePrint)
    // app.use(VxePulldown)
    // app.use(VxeRadio)
    // app.use(VxeRadioButton)
    // app.use(VxeRadioGroup)
    // app.use(VxeRow)
    // app.use(VxeSelect)
    // app.use(VxeSwitch)
    // app.use(VxeTabPane)
    // app.use(VxeTabs)
    // app.use(VxeTextarea)
    // app.use(VxeTip)
    // app.use(VxeTooltip)
    // app.use(VxeTree)
    // app.use(VxeTreeSelect)
    // app.use(VxeUpload)
}

const LazyVxeTable = (app: App) => {
    console.log(app);
    
    // app.use(VxeTable)
    // app.use(VxeColumn)
    // app.use(VxeColgroup)
    // app.use(VxeGrid)
    // app.use(VxeToolbar)
}

const init = (app: App) => {
    app
    .use(LazyVxeUI)
    .use(LazyVxeTable)
}
export default init