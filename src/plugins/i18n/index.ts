/*
 * @Author: lgq
 * @Date: 2025-04-25 17:11:48
 * @LastEditors: lgq
 * @LastEditTime: 2025-06-03 16:27:16
 * @Description: file content
 * @FilePath: \lu-admin\src\plugins\i18n\index.ts
*/
// import { VxeUI } from 'vxe-pc-ui'
// import zhCN from 'vxe-pc-ui/lib/language/zh-CN'

import type { App } from 'vue'
import type { I18n, I18nOptions } from 'vue-i18n'
import { createI18n } from 'vue-i18n'

const defaultLoadLang = 'zh-CN'

async function createI18nOptions(): Promise<I18nOptions> {
  const appStore = useAppStore()
  const { locale } = storeToRefs(appStore)

  // 扩展可从服务器端获取语言翻译文件
  let defaultLocal
  try {
    defaultLocal = await import(`./modules/${locale.value}.ts`)
  }
  catch (_error) {
    defaultLocal = await import(`./modules/${defaultLoadLang}.ts`)
  }

  return {
    legacy: false,
    locale: locale.value,
    fallbackLocale: 'zh-CN',
    messages: {
      [locale.value]: defaultLocal.default,
    },
    sync: true,
    silentTranslationWarn: true,
    missingWarn: false,
    silentFallbackWarn: true,
  }
}

export let i18n: I18n

export async function start(app: App) {
  const options = await createI18nOptions()
  i18n = createI18n(options)
  app.use(i18n)
  // VxeUI.setI18n('zh-CN', zhCN)
  // VxeUI.setLanguage('zh-CN')
}
