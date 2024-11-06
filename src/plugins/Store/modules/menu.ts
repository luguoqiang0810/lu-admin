/*
 * @Author: lgq
 * @Date: 2024-08-29 11:22:18
 * @LastEditors: lgq
 * @LastEditTime: 2024-11-05 19:02:34
 * @Description: file content
 * @FilePath: \lu-admin\src\plugins\Store\modules\menu.ts
 */
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { defineStore } from 'pinia'
import { getMenus } from '@/plugins/Router/utils'
import Setting from '@/setting/index'
import type { Menu } from '@/types/index'
import type { RouteRecord } from 'vue-router'

const useLayoutMenu = defineStore('layoutMenu', () => {

    const router = useRouter()
    const route = useRoute()
    const { layout } = Setting
    const menuActiveKey = ref<string[]>([route.fullPath]); // 选中的菜单
    const menuOpenKeys = ref<string[]>([]) // 展开的菜单
    const frontMenuList = ref<Menu[]>(getMenus()) // 所有菜单
    const historyMenuList = ref<Menu[]>([]) // 历史菜单
    const tabsActiveKey = ref<string>('') // 选中的标签页
    const keepAliveIncludes = ref<string[]>([]) // 缓存的标签页
    const breadcrumb = ref<Menu[]>([])
    
    // 添加页tab
    const setHistoryMenuList = (targ: Menu) => {
        if (!layout.showTabs) return false

        const index = historyMenuList.value.findIndex((item: Menu) => item.key === targ.key)
        if (index === -1) {
            historyMenuList.value.push(targ)
            keepAliveIncludes.value.push(targ.name as string)
        }
        tabsActiveKey.value = targ.key
    }

    // 设置菜单选中
    const setMenuActiveKey = (targ: string) => {
        menuActiveKey.value = [targ]
    }

    // 默认展开菜单
    const getParentPath = () => {
        menuOpenKeys.value = route.matched.map((item: RouteRecord) => item.path)
    }
    
    // 删除页面tab
    const removeHistoryMenuList = (targ: string) => {
        const index = historyMenuList.value.findIndex((item: Menu) => item.key === targ)
        historyMenuList.value.splice(index, 1)
        keepAliveIncludes.value.splice(index, 1)

        if (targ === tabsActiveKey.value) {
            const showMenu = index === 0 ? historyMenuList.value[index] : historyMenuList.value[index - 1]
            router.push(showMenu.key)
        }
    }

    // 设置面包屑 
    const setBreadcrumb = () => {
        const { matched } = route
        breadcrumb.value = matched.map((item: RouteRecord) => ({ key: item.path, label: item.meta.title }))
    }

    return {
        menuActiveKey,
        menuOpenKeys,
        frontMenuList,
        historyMenuList,
        tabsActiveKey,
        keepAliveIncludes,
        breadcrumb,
        setHistoryMenuList,
        getParentPath,
        setMenuActiveKey,
        removeHistoryMenuList,
        setBreadcrumb
    }
})

export default useLayoutMenu