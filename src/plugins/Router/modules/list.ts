/*
 * @Author: lgq
 * @Date: 2024-09-12 10:32:45
 * @LastEditors: lgq
 * @LastEditTime: 2024-11-22 09:51:10
 * @Description: file content
 * @FilePath: \lu-admin\src\plugins\Router\modules\list.ts
 */
export default {
    path: '/list',
    name: 'List',
    filePath: 'Template',
    redirect: '/list/table-list',
    sort: 2,
    meta: {
        title: '列表页',
        permission: '*',
        hideMenu: false,
        icon: ''
    },
    children: [
        {
            path: '/list/table-list',
            name: 'TableList',
            filePath: 'views/list/table-list/index.vue',
            sort: 0,
            meta: {
                title: '查询表格',
                permission: '*',
                hideMenu: false,
                icon: ''
            }
        },
        {
            path: '/list/basic-list',
            name: 'BasicList',
            filePath: 'views/list/basic-list/index.vue',
            sort: 1,
            meta: {
                title: '标准表格',
                permission: '*',
                hideMenu: false,
                icon: ''
            }
        }
    ]
}