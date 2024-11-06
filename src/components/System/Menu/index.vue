<!--
 * @Author: lgq
 * @Date: 2024-07-24 11:32:05
 * @LastEditors: lgq
 * @LastEditTime: 2024-11-05 18:18:58
 * @Description: 菜单
 * @FilePath: \lu-admin\src\components\System\Menu\index.vue
-->
<template>
    <a-menu
        v-model:openKeys="layoutMenu.menuOpenKeys"
        v-model:selectedKeys="layoutMenu.menuActiveKey"
        :items="dataSource"
        mode="inline"
        @click="handleMenuClick"
    ></a-menu>
</template>

<script lang="ts" setup>
    import { watch, unref, onMounted } from 'vue'
    import { useRouter, useRoute } from 'vue-router'
    import { useLayoutMenu } from '@/plugins/Store'
    import type { Menu } from '@/types/index'
    
    interface Props {
        dataSource: Menu[]
    }
    
    interface clickProps {
        key: string
    }

    const props = withDefaults(defineProps<Props>(), {})

    const router = useRouter()
    const route = useRoute()
    const layoutMenu = useLayoutMenu()
    const { setHistoryMenuList, getParentPath, setMenuActiveKey, setBreadcrumb } = useLayoutMenu()
    const { meta, fullPath, name } = route

    // 点击菜单
    const handleMenuClick = async ({ key }: clickProps) => {
        if (unref(layoutMenu.menuActiveKey)[0] === key) {
            return 
        }
        await router.push(key)
    }

    watch(() => props.dataSource, () => {
        getParentPath()
    })

    
    // 监听路由改变
    watch(() => route.path, () => {
        const { meta, fullPath, name } = route
        setHistoryMenuList({ key: fullPath, label: meta.title, name })
        getParentPath()
        setMenuActiveKey(fullPath)
        setBreadcrumb()
    })

    // 初始化页面tab和展开菜单
    onMounted(() => {
        setHistoryMenuList({ key: fullPath, label: meta.title, name })
        getParentPath()
        setBreadcrumb()
    })
</script>

<style lang="less" scoped>

</style>