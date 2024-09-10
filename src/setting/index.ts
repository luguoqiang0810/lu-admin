/*
 * @Author: lgq
 * @Date: 2024-07-09 15:01:53
 * @LastEditors: lgq
 * @LastEditTime: 2024-09-06 09:56:10
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
    }
}