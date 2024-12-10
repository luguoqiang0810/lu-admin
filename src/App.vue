<!--
 * @Author: lgq
 * @Date: 2024-07-08 16:53:41
 * @LastEditors: lgq
 * @LastEditTime: 2024-11-22 10:20:56
 * @Description: file content
 * @FilePath: \lu-admin\src\App.vue
-->
<template>
    <a-config-provider :theme="theme">
        <router-view></router-view>
    </a-config-provider>
</template>

<script setup lang="ts">
    import { reactive } from 'vue'
    import { configure } from '@/setting/index'

    const { theme: themeAlias } = configure
    const theme = reactive(themeAlias)
</script>

<style scoped>
    .ant-custom-skeleton-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        padding: 24px;
        overflow: hidden;
        box-sizing: border-box;
    }
</style>
