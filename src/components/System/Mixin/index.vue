<!--
 * @Author: lgq
 * @Date: 2024-07-18 15:24:49
 * @LastEditors: lgq
 * @LastEditTime: 2024-09-04 14:26:11
 * @Description: file content
 * @FilePath: \lu-admin\src\components\System\Mixin\index.vue
-->
<template>
    <vxe-layout-container vertical>
        <Header />

        <vxe-layout-container>
            <vxe-layout-aside class="l-aside">
                <Menu :data-source="layoutMenu.frontMenuList" />
            </vxe-layout-aside>
            
            <vxe-layout-container vertical>
                <vxe-layout-body class="l-layout-body">
                    <Module />
                </vxe-layout-body>
            </vxe-layout-container>
        </vxe-layout-container>

        <Footer />
    </vxe-layout-container>
</template>

<script lang="ts" setup>
    import Header from '@/components/System/Header/index.vue'
    import Footer from '@/components/System/Footer/index.vue'
    import Module from '@/components/System/Layout/Module.vue'
    import Menu from '@/components/System/Menu/index.vue'
    import { useLayoutMenu } from '@/plugins/Store/modules/menu'

    const layoutMenu = useLayoutMenu()
</script>

<style lang="less" scoped>
    .l-aside {
        position: relative;
        z-index: 10;
        box-shadow: 2px 0 8px rgba(29, 35, 41, .05);
    }
    .l-layout-body {
        background: #f5f5f5;
    }
</style>