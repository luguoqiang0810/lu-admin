/*
 * @Author: lgq
 * @Date: 2024-07-09 15:01:53
 * @LastEditors: lgq
 * @LastEditTime: 2024-09-18 16:01:04
 * @Description: file content
 * @FilePath: \lu-admin\src\setting\index.ts
 */
export default {
    systemName: 'LAdmin',
    router: {
        history: 'html5',
        redirect: '/workPlace',
        whitePathList: 'login'
    },
    theme: {
        token: {
            colorPrimary: '#1677ff'
        }
    },
    layout: {
        mode: 'mixin',
        headerHeight: 60,
        headerBackground: '#fff',
        showFooter: false,
        footerHeight: 60,
        showTabs: true
    },
    request: {
        // `timeout` 指定请求超时的毫秒数。
        // 如果请求时间超过 `timeout` 的值，则请求会被中断
        timeout: 30 * 1000,
        // 自定义请求头
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        // `withCredentials` 表示跨域请求时是否需要使用凭证
        withCredentials: false, // default
        // `responseType` 表示浏览器将要响应的数据类型
        // 选项包括: 'arraybuffer', 'document', 'json', 'text', 'stream'
        // 浏览器专属：'blob'
        responseType: 'json', // 默认值
    }
}