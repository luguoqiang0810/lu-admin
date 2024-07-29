<!--
 * @Author: lgq
 * @Date: 2024-07-09 15:25:34
 * @LastEditors: lgq
 * @LastEditTime: 2024-07-23 18:14:42
 * @Description: file content
 * @FilePath: \lu-admin\src\components\System\Layout\Main.vue
-->
<template>
    <div class="l-main">
        <component :is="components[mode]"></component>
    </div>
</template>

<script lang="ts" setup>
    import { markRaw } from 'vue'
    import Setting from '@/setting/index'
    import { ObjectNotSure } from '@/types/index'
    import Sider from '@/components/System/Sider/index.vue'
    import Top from '@/components/System/Top/index.vue'
    import Mixin from '@/components/System/Mixin/index.vue'
    
    const { layout } = Setting
    const { mode } = layout
    const components = markRaw<ObjectNotSure>({
        sider: Sider,
        top: Top,
        mixin: Mixin
    })
</script>

<style lang="less" scoped>
    .l-main {
        position: relative;
        height: 100vh;
    }
</style>