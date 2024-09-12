<!--
 * @Author: lgq
 * @Date: 2024-07-24 10:56:56
 * @LastEditors: lgq
 * @LastEditTime: 2024-09-11 18:19:26
 * @Description: file content
 * @FilePath: \lu-admin\src\views\exception\404.vue
-->
<template>
    <page-container :show-breadcrumb="false">
        <Exception status="404" title="404" sub-title="抱歉，您访问的页面不存在。" />
    </page-container>
</template>

<script lang="ts" setup>
    import Exception from '@/components/System/Exception/index.vue'

    defineOptions({
        name: '404'
    })
</script>