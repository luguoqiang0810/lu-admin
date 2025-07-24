/*
 * @Author: lgq
 * @Date: 2025-04-25 17:11:48
 * @LastEditors: guoqiang.lu
 * @LastEditTime: 2025-07-23 14:56:11
 * @Description: file content
 * @FilePath: \lu-admin\src\plugins\i18n\index.ts
 */
import type { App } from "vue";
import type { I18n, I18nOptions } from "vue-i18n";
import { createI18n } from "vue-i18n";

const defaultLoadLang = "zh-CN";

async function createI18nOptions(): Promise<I18nOptions> {
  const appStore = useAppStore();
  const { locale } = storeToRefs(appStore);

  // 扩展可从服务器端获取语言翻译文件
  let defaultLocal;
  try {
    defaultLocal = await import(`./modules/${locale.value}.ts`);
  } catch (_error) {
    defaultLocal = await import(`./modules/${defaultLoadLang}.ts`);
  }

  return {
    legacy: false,
    locale: locale.value,
    fallbackLocale: "zh-CN",
    messages: {
      [locale.value]: defaultLocal.default,
    },
    sync: true,
    silentTranslationWarn: true,
    missingWarn: false,
    silentFallbackWarn: true,
  };
}

export let i18n: I18n;

export const start = async (app: App) => {
  const options = await createI18nOptions();
  i18n = createI18n(options);
  app.use(i18n);
};
