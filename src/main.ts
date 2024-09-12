/*
 * @Author: lgq
 * @Date: 2024-07-08 16:53:41
 * @LastEditors: lgq
 * @LastEditTime: 2024-09-11 16:46:12
 * @Description: file content
 * @FilePath: \lu-admin\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import Plugins, { Register } from './plugins/index'
import './style/init.css'
import 'nprogress/nprogress.css'

const app = createApp(App)
Plugins(app)
Register(app)
app.mount('#app')