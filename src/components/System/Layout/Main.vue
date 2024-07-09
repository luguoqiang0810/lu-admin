<!--
 * @Author: lgq
 * @Date: 2024-07-09 15:25:34
 * @LastEditors: lgq
 * @LastEditTime: 2024-07-09 17:23:34
 * @Description: file content
 * @FilePath: \lu-admin\src\components\System\Layout\main.vue
-->
<template>
    <div class="custom-main">
        <vxe-layout-container vertical>
            <vxe-layout-header fixed class="vxe-custom-layout-header">
              <div>头部</div>
            </vxe-layout-header>
            <vxe-layout-body class="vxe-custom-layout-body">
                <div>132456789</div>
            </vxe-layout-body>
            <vxe-layout-footer fixed class="vxe-custom-layout-footer">
              <div>底部</div>
            </vxe-layout-footer>
        </vxe-layout-container>
    </div>
</template>

<script lang="ts" setup>
    import { ref, computed } from 'vue'
    import Setting from '@/setting/index'

    const { layout } = Setting
    const {
        headerHeight: headerHeightAlias,
        showFooter,
        footerHeight: footerHeightAlias
    } = layout
    
    const headerHeight = ref<string>(`${headerHeightAlias}px`)
    const footerHeight = ref<string>(`${footerHeightAlias}px`)
    const heightDifference = computed(() => {
        const footerHeightInternal = showFooter ? footerHeightAlias : 0
        return `${headerHeightAlias + footerHeightInternal}px`
    })
</script>

<style lang="less" scoped>
    .custom-main {
        position: relative;
        height: 100vh;
        .vxe-custom-layout-header {
            height: v-bind(headerHeight);
        }
        .vxe-custom-layout-body {
            flex-grow: initial;
            height: calc(100vh - v-bind(heightDifference))
        }
        .vxe-custom-layout-footer {
            height: v-bind(footerHeight);
        }
    }
</style>