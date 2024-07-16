<!--
 * @Author: lgq
 * @Date: 2024-07-09 15:25:34
 * @LastEditors: lgq
 * @LastEditTime: 2024-07-09 17:51:35
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
            <template v-if="showFooter">
                <vxe-layout-footer fixed class="vxe-custom-layout-footer"></vxe-layout-footer>
            </template>
        </vxe-layout-container>
    </div>
</template>

<script lang="ts" setup>
    import { ref, computed } from 'vue'
    import { theme } from 'ant-design-vue';
    import Setting from '@/setting/index'

    const { useToken } = theme;
    const { token } = useToken();
    
    const { layout } = Setting
    const {
        headerHeight: headerHeightAlias,
        showFooter: showFooterAlias,
        footerHeight: footerHeightAlias,
        headerBackground: headerBackgroundAlias
    } = layout
    
    const headerHeight = ref<string>(`${headerHeightAlias}px`)
    const footerHeight = ref<string>(`${footerHeightAlias}px`)
    const showFooter = ref<boolean>(showFooterAlias)
    const headerBackground = computed(() => {
        return headerBackgroundAlias ? headerBackgroundAlias : token.value.colorPrimary
    })
</script>

<style lang="less" scoped>
    .custom-main {
        position: relative;
        height: 100vh;
        .vxe-custom-layout-header {
            height: v-bind(headerHeight);
            background: v-bind(headerBackground);
        }
        .vxe-custom-layout-footer {
            height: v-bind(footerHeight);
        }
    }
</style>