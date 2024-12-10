<!--
 * @Author: lgq
 * @Date: 2024-07-17 16:34:22
 * @LastEditors: lgq
 * @LastEditTime: 2024-11-22 10:26:37
 * @Description: file content
 * @FilePath: \lu-admin\src\components\System\Footer\index.vue
-->
<template>
    <vxe-layout-footer v-if="showFooter" fixed class="l-footer"></vxe-layout-footer>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    import { configure } from '@/setting/index'
    
    const { layout } = configure
    const {
        showFooter: showFooterAlias,
        footerHeight: footerHeightAlias,
    } = layout

    const showFooter = ref<boolean>(showFooterAlias)
    const footerHeight = ref<string>(`${footerHeightAlias}px`)
</script>

<style lang="less" scoped>
    .l-footer {
        height: v-bind(footerHeight);
        box-shadow: 1px 0 4px rgba(0, 21, 41, .12);
    }
</style>