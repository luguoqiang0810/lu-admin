<!--
 * @Author: lgq
 * @Date: 2024-07-18 15:13:37
 * @LastEditors: lgq
 * @LastEditTime: 2024-07-18 17:07:34
 * @Description: file content
 * @FilePath: \lu-admin\src\components\System\SiderUnit\index.vue
-->
<template>
    <vxe-layout-container>
        <vxe-layout-aside class="l-aside">
            <Logo />
            <div style="height: 800px">菜单</div>
            <div style="height: 800px">菜单</div>
        </vxe-layout-aside>

        <vxe-layout-container vertical>
            <Header />

            <vxe-layout-body>
                <div>132465789</div>
            </vxe-layout-body>

            <Footer />
        </vxe-layout-container>
    </vxe-layout-container>
</template>

<script lang="ts" setup>
    import Header from '@/components/System/Header/index.vue'
    import Footer from '@/components/System/Footer/index.vue'
    import Logo from '@/components/System/Logo/index.vue'
</script>

<style lang="less" scoped>
    .l-aside {
        position: relative;
        z-index: 10;
        box-shadow: 2px 0 8px rgba(29, 35, 41, .05);
    }
</style>