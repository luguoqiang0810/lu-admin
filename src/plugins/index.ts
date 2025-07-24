/*
 * @Author: lgq
 * @Date: 2025-04-25 17:00:54
 * @LastEditors: guoqiang.lu guoqiang.lu@percent.cn
 * @LastEditTime: 2025-07-23 10:57:02
 * @Description: file content
 * @FilePath: \lu-admin\src\plugins\index.ts
 */
import { start as piniaStart } from "./pinia";
import { start as i18nStart } from "./i18n";
import type { App } from "vue";

export const start = async (app: App) => {
  piniaStart(app);
  await i18nStart(app);
};
