<!--
 * @Author: lgq
 * @Date: 2024-07-23 18:18:31
 * @LastEditors: lgq
 * @LastEditTime: 2024-11-05 19:03:24
 * @Description: file content
 * @FilePath: \lu-admin\src\components\System\Layout\Page.vue
-->
<template>
    <div class="l-page">
        <router-view #default="{ Component }">
            <keep-alive :include="layoutMenu.keepAliveIncludes">
                <component :is="Component" />
            </keep-alive>
        </router-view>
    </div>
</template>

<script lang="ts" setup>
    import { useLayoutMenu } from '@/plugins/Store'

    defineOptions({
        name: 'Page'
    })

    const layoutMenu = useLayoutMenu()
</script>