/*
 * @Author: lgq
 * @Date: 2024-07-08 16:53:41
 * @LastEditors: lgq
 * @LastEditTime: 2024-08-26 17:34:31
 * @Description: file content
 * @FilePath: \lu-admin\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import Plugins from './plugins/index'
import './style/init.css'
import 'nprogress/nprogress.css'

const app = createApp(App)
Plugins(app)
app.mount('#app')