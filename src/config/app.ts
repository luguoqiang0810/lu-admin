/*
 * @Author: lgq
 * @Date: 2025-05-13 14:28:38
 * @LastEditors: lgq
 * @LastEditTime: 2025-05-15 11:39:16
 * @Description: file content
 * @FilePath: \lu-admin\src\config\app.ts
 */
import type { LayoutSetting } from './../types/layout-setting'

export default {
  systemName: 'Lu Admin', // 系统名称
  colorPrimary: '#1677ff', // 主题色
  fontSize: 14, // 字体
  layout: 'mix',
  contentWidthMode: 'Fixed', // 内容宽度
  contentWidth: 1200, // 内容宽度
  headerHeight: 64, // 头部高度,
  headerBgColor: '#001529', // 头部背景色
  locale: 'zh_CN', // 语言
  scriptUrl: '', // 脚本地址
} as LayoutSetting
