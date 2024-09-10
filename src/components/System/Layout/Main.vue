<!--
 * @Author: lgq
 * @Date: 2024-07-09 15:25:34
 * @LastEditors: lgq
 * @LastEditTime: 2024-09-04 16:20:32
 * @Description: file content
 * @FilePath: \lu-admin\src\components\System\Layout\Main.vue
-->
<template>
    <div class="l-main">
        <component v-if="showComponent" :is="components[mode]"></component>
        <Exception v-else status="403" title="403" sub-title="抱歉，您无权访问此页面。" />
    </div>
</template>

<script lang="ts" setup>
    import { markRaw, onMounted, ref } from 'vue'
    import { useRoute } from 'vue-router'
    import { useUserStore } from '@/plugins/Store/modules/user'
    import Setting from '@/setting/index'
    import { Recordable } from '@/types/index'
    import Sider from '@/components/System/Sider/index.vue'
    import Top from '@/components/System/Top/index.vue'
    import Mixin from '@/components/System/Mixin/index.vue'
    import Exception from '@/components/System/Exception/index.vue'

    const route = useRoute();
    const userStore = useUserStore()
    const { layout } = Setting
    const { mode } = layout
    const showComponent = ref<boolean>(true)
    const components = markRaw<Recordable>({
        sider: Sider,
        top: Top,
        mixin: Mixin
    })

    onMounted(() => {
        if (!(route.meta.permission === '*' || userStore.permission.includes(route.meta.permission as string))) {
            showComponent.value = false
        }
    })
</script>

<style lang="less" scoped>
    .l-main {
        position: relative;
        height: 100vh;
    }
</style>