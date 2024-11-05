<!--
 * @Author: lgq
 * @Date: 2024-09-11 16:40:25
 * @LastEditors: lgq
 * @LastEditTime: 2024-09-12 16:38:09
 * @Description: file content
 * @FilePath: \lu-admin\src\components\System\PageContainer\index.vue
-->
<template>
    <div class="l-page-container">
        <a-breadcrumb v-if="showBreadcrumb" class="l-breadcrumb">
            <a-breadcrumb-item v-for="(item, index) in layoutMenu.breadcrumb" :key="item.key">
                <template v-if="index === layoutMenu.breadcrumb.length - 1">
                    <span>{{ item.label }}</span>
                </template>
                <template v-else>
                    <router-link :to="item.key">{{ item.label }}</router-link>
                </template>
            </a-breadcrumb-item>
        </a-breadcrumb>
        <div class="l-page-body">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { useLayoutMenu } from '@/plugins/Store'

    interface Props {
        showBreadcrumb?: boolean
    }

    withDefaults(defineProps<Props>(), {
        showBreadcrumb: true
    })

    const layoutMenu = useLayoutMenu()
</script>

<style lang="less" scoped>
    .l-breadcrumb {
        background: #fff;
        padding-left: 16px;
        padding-bottom: 16px;
    }
    .l-page-body {
        padding: 16px;
    }
</style>