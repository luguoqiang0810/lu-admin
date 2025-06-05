import type { App } from 'vue'
/*
* @Author: lgq
* @Date: 2025-04-24 15:29:22
 * @LastEditors: lgq
 * @LastEditTime: 2025-05-13 18:09:09
* @Description: file content
 * @FilePath: \lu-admin\src\main.ts
*/
import { createApp } from 'vue'
import Root from './App.vue'
import { start as pluginsStart } from './plugins'
import './style/index.scss'

async function start() {
  const app: App = createApp(Root)
  app.use(pluginsStart)
  const mount = app.mount('#app')
  mount.$nextTick(() => {
    const loadingScreen = document.querySelector('.loading-screen')
    if (loadingScreen) {
      loadingScreen.remove()
    }
  })
}

start()
