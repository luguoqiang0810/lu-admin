/*
 * @Author: lgq
 * @Date: 2025-05-13 17:01:47
 * @LastEditors: guoqiang.lu
 * @LastEditTime: 2025-07-24 16:29:13
 * @Description: file content
 * @FilePath: \lu-admin\src\plugins\pinia\modules\useAppStore.ts
 */
import defaultSetting from '@/config/app'
import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context'
import type { LayoutSetting } from '@/types/layout-setting'

export const useAppStore = defineStore('app', () => {
  const layoutSetting = reactive<LayoutSetting>(defaultSetting)
  const locale = ref<string>(defaultSetting.locale!)

  const setLayoutSetting = (key: string, val: string) => {
    layoutSetting[key] = val
  }

  return {
    layoutSetting,
    locale,
    setLayoutSetting
  }
})
