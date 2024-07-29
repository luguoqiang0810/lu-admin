<!--
 * @Author: lgq
 * @Date: 2024-07-08 16:53:41
 * @LastEditors: lgq
 * @LastEditTime: 2024-07-18 16:54:12
 * @Description: file content
 * @FilePath: \lu-admin\src\App.vue
-->
<template>
    <a-config-provider :theme="theme">
        <template v-if="pageLoading">
            <div class="ant-custom-skeleton-content">
                <a-skeleton v-for="item in skeletons" :key="item" active avatar />
            </div>
        </template>
        <template v-else>
            <router-view>
                <template #default="{ Component, route }">
                    <component :is="Component" :key="route.fullPath" />
                </template>
            </router-view>
        </template>
    </a-config-provider>
</template>

<script setup lang="ts">
    import { reactive, ref, onMounted, nextTick } from 'vue'
    import Setting from '@/setting/index'

    const { theme: themeAlias } = Setting
    const theme = reactive(themeAlias)
    const pageLoading = ref<boolean>(true)
    const skeletons = ref<number[]>([1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009])

    onMounted(() => nextTick(() => pageLoading.value = false))
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
