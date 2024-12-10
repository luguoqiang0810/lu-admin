/*
 * @Author: lgq
 * @Date: 2024-08-23 15:55:44
 * @LastEditors: lgq
 * @LastEditTime: 2024-11-22 09:50:57
 * @Description: file content
 * @FilePath: \lu-admin\src\plugins\Router\modules\exception.ts
 */
export default {
    path: '/exception',
    name: 'Exception',
    filePath: 'Template',
    sort: 1,
    meta: {
        title: '异常页',
        permission: '*',
        hideMenu: false,
        icon: ''
    },
    children: [
        {
            path: '/exception/403',
            name: '403',
            filePath: 'views/exception/403.vue',
            sort: 0,
            meta: {
                title: '403',
                permission: '*',
                hideMenu: false,
                icon: ''
            }
        },
        {
            path: '/exception/404',
            name: '404',
            filePath: 'views/exception/404.vue',
            sort: 1,
            meta: {
                title: '404',
                permission: '*',
                hideMenu: false,
                icon: ''
            }
        },
        {
            path: '/exception/500',
            name: '500',
            filePath: 'views/exception/500.vue',
            sort: 2,
            meta: {
                title: '500',
                permission: '*',
                hideMenu: false,
                icon: ''
            }
        }
    ]
}