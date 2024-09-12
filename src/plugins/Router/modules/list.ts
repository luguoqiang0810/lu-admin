/*
 * @Author: lgq
 * @Date: 2024-09-12 10:32:45
 * @LastEditors: lgq
 * @LastEditTime: 2024-09-12 10:50:20
 * @Description: file content
 * @FilePath: \lu-admin\src\plugins\Router\modules\list.ts
 */
export default {
    path: '/list',
    name: 'List',
    componentAs: 'components/System/Layout/Page.vue',
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
            componentAs: 'views/list/table-list/index.vue',
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
            componentAs: 'views/list/basic-list/index.vue',
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