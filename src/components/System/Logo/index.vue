<!--
 * @Author: lgq
 * @Date: 2024-07-18 11:21:37
 * @LastEditors: lgq
 * @LastEditTime: 2024-07-18 17:07:24
 * @Description: file content
 * @FilePath: \lu-admin\src\components\System\Logo\index.vue
-->
<template>
    <a-flex align="center" :justify="mode === 'sider' ? 'center' : 'start'" :gap="12" class="l-logo">
        <vxe-image :src="logo" :width="40"></vxe-image>
        <div class="l-title">{{ systemName }}</div>
    </a-flex>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    import { theme } from 'ant-design-vue';
    import Setting from '@/setting/index'
    import logo from '@/assets/system/logo.png'

    const { layout, systemName } = Setting
    const { useToken } = theme;
    const { token } = useToken();
    const {
        headerHeight: headerHeightAlias,
        mode
    } = layout
    
    const headerHeight = ref<string>(`${headerHeightAlias}px`)
    const colorPrimary = ref<string>(token.value.colorPrimary)
</script>

<style lang="less" scoped>
    .l-logo {
        position: sticky;
        top: 0;
        height: v-bind(headerHeight);
        background: #fff;
        .l-title {
            color: v-bind(colorPrimary);
            font-size: 24px;
        }
    }
</style>