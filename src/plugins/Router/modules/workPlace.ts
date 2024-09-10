/*
 * @Author: lgq
 * @Date: 2024-08-23 15:48:22
 * @LastEditors: lgq
 * @LastEditTime: 2024-08-29 10:00:03
 * @Description: file content
 * @FilePath: \lu-admin\src\plugins\Router\modules\workPlace.ts
 */
export default {
    path: '/workPlace',
    name: 'WorkPlace',
    componentAs: 'views/workPlace/index.vue',
    sort: 0,
    meta: {
        title: '工作台',
        permission: '*',
        hideMenu: false,
        icon: ''
    }
}