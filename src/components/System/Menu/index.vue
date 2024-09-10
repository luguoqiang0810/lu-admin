<!--
 * @Author: lgq
 * @Date: 2024-07-24 11:32:05
 * @LastEditors: lgq
 * @LastEditTime: 2024-09-09 17:53:23
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
    import { watch, unref } from 'vue'
    import { useRouter } from 'vue-router'
    import { useLayoutMenu } from '@/plugins/Store/modules/menu'
    
    import type { Menu } from '@/types/index'
    
    interface Props {
        dataSource: Menu[]
    }
    
    interface clickProps {
        item: any
        key: string
        keyPath: string[]
    }

    const props = withDefaults(defineProps<Props>(), {})

    const router = useRouter()
    const layoutMenu = useLayoutMenu()
    const { setHistoryMenuList, getParentPath } = useLayoutMenu()

    // 点击菜单
    const handleMenuClick = async ({ item, key }: clickProps) => {
        if (unref(layoutMenu.menuActiveKey)[0] === key) {
            return 
        }
        
        await router.push(key)
        setHistoryMenuList({ key, label: item.title })
        getParentPath()
    }

    watch(() => props.dataSource, () => {
        getParentPath()
    })
</script>

<style lang="less" scoped>

</style>