/*
 * @Author: lgq
 * @Date: 2024-09-14 17:29:15
 * @LastEditors: lgq
 * @LastEditTime: 2024-11-01 16:09:32
 * @Description: file content
 * @FilePath: \lu-admin\src\plugins\Axios\modules\workPlace.ts
 */
export default [
    {
		category: 'workPlace',
        prefix: '/mtc',
		method: 'get',
		name: 'getWorkPlace',
		url: '/template/list',
		desc: '获取数据',
		headers: {
			'Content-Type': 'application/json'
		},
		withToken: true,
		isAbortController: true
	},
	{
		category: 'workPlace',
        prefix: '',
		method: 'post',
		name: 'setWorkPlace',
		url: '/setWorkPlace',
		desc: '设置数据',
		headers: {
			'Content-Type': 'application/json'
		},
		withToken: true,
		isAbortController: true
    }
]