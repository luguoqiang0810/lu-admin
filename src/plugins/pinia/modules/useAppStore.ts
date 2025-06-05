import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context'
import type { LayoutSetting } from '@/types/layout-setting'
/*
 * @Author: lgq
 * @Date: 2025-05-13 17:01:47
 * @LastEditors: lgq
 * @LastEditTime: 2025-05-14 17:41:29
 * @Description: file content
 * @FilePath: \lu-admin\src\plugins\pinia\modules\useAppStore.ts
 */
import defaultSetting from '@/config/app'

export const useAppStore = defineStore('app', () => {
  const layoutSetting = reactive<LayoutSetting>(defaultSetting)
  const locale = ref<string>(defaultSetting.locale!)
  const themeConfig = reactive<ThemeConfig>({
    token: {
      colorPrimary: layoutSetting.colorPrimary,
      fontSize: layoutSetting.fontSize,
    },
  })

  return {
    layoutSetting,
    locale,
    theme: themeConfig,
  }
})
