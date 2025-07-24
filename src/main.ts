/*
 * @Author: lgq
 * @Date: 2025-04-24 15:29:22
 * @LastEditors: guoqiang.lu
 * @LastEditTime: 2025-07-23 14:50:15
 * @Description: file content
 * @FilePath: \lu-admin\src\main.ts
 */
import { createApp } from "vue";
import Root from "./App.vue";
import { start as pluginsStart } from "./plugins";
import "./style/index.css";
import type { App } from "vue";

const start = async () => {
  const app: App = createApp(Root);
  await pluginsStart(app);

  const mount = app.mount("#app");
  mount.$nextTick(() => {
    const loadingScreen = document.querySelector(".loading-screen");
    if (loadingScreen) {
      loadingScreen.remove();
    }
  });
};

start();
