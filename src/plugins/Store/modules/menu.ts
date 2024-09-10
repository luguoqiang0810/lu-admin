/*
 * @Author: lgq
 * @Date: 2024-08-29 11:22:18
 * @LastEditors: lgq
 * @LastEditTime: 2024-09-09 18:12:32
 * @Description: file content
 * @FilePath: \lu-admin\src\plugins\Store\modules\menu.ts
 */
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import { defineStore } from 'pinia'
import { getMenus } from '@/plugins/Router/utils'
import Setting from '@/setting/index'
import type { Menu } from '@/types/index'
import type { RouteRecord } from 'vue-router'

export const useLayoutMenu = defineStore('layoutMenu', () => {
    const route = useRoute()
    const { meta, fullPath } = route
    const { layout } = Setting
    
    const menuActiveKey = ref<string[]>([route.fullPath]);
    const menuOpenKeys = ref<string[]>([])
    const frontMenuList = ref<Menu[]>(getMenus())
    const historyMenuList = ref<Menu[]>([])
    const tabsActiveKey = ref<string>('')
    const keepAliveIncludes = ref<string[]>([])
    
    // 添加页tab
    const setHistoryMenuList = (targ: Menu) => {
        if (!layout.showTabs) return false

        const index = historyMenuList.value.findIndex((item: Menu) => item.key === targ.key)
        if (index === -1) {
            historyMenuList.value.push(targ)
            keepAliveIncludes.value.push(targ.label)
        }
        tabsActiveKey.value = targ.key
    }

    // 设置选中项
    const setTabsActiveKey = (targ: string) => {
        tabsActiveKey.value = targ
    }

    // 设置菜单选中
    const setMenuActiveKey = (targ: string) => {
        menuActiveKey.value = [targ]
    }

    // 默认展开菜单
    const getParentPath = () => {
        menuOpenKeys.value = route.matched.map((item: RouteRecord) => item.path)
    }
    
    // 初始化页面tab和展开菜单
    onMounted(() => {
        setHistoryMenuList({ key: fullPath, label: meta.title })
        getParentPath()
    })

    return {
        menuActiveKey,
        menuOpenKeys,
        frontMenuList,
        historyMenuList,
        tabsActiveKey,
        keepAliveIncludes,
        setHistoryMenuList,
        setTabsActiveKey,
        getParentPath,
        setMenuActiveKey
    }
})
