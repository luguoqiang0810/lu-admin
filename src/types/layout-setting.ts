/*
 * @Author: lgq
 * @Date: 2025-05-13 15:10:34
 * @LastEditors: lgq
 * @LastEditTime: 2025-05-13 16:27:13
 * @Description: file content
 * @FilePath: \lu-admin\src\types\layout-setting.ts
 */
export interface LayoutSetting {
  systemName?: string
  colorPrimary?: string // 主题色
  fontSize?: number // 字体
  layout?: 'mix' | 'side' | 'top' // 布局
  contentWidthMode?: 'Fluid' | 'Fixed' // 内容宽度模式
  contentWidth?: number // 内容宽度
  headerHeight?: number // 头部高度,
  headerBgColor?: string // 头部背景色
  locale?: string // 语言
  footer?: boolean // 底部
  scriptUrl?: string // 脚本地址

  // title?: string
  // logo?: string
  // theme: ThemeType
  // collapsed: boolean
  // drawerVisible: boolean
  // colorPrimary?: string
  // layout?: LayoutType
  // contentWidth?: ContentWidth
  // fixedHeader?: boolean
  // fixedSider?: boolean
  // splitMenus?: boolean
  // watermark?: boolean
  // header?: boolean
  // footer?: boolean
  // menu?: boolean
  // menuHeader?: boolean
  // colorWeak?: boolean
  // colorGray?: boolean
  // multiTab?: boolean
  // multiTabFixed?: boolean
  // headerHeight?: number
  // copyright?: string
  // keepAlive?: boolean
  // accordionMode?: boolean
  // leftCollapsed?: boolean
  // compactAlgorithm?: boolean
  // animationName?: AnimationNameValueType
}
