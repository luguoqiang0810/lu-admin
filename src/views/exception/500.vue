<!--
 * @Author: lgq
 * @Date: 2024-07-24 10:57:56
 * @LastEditors: lgq
 * @LastEditTime: 2024-09-11 18:19:42
 * @Description: file content
 * @FilePath: \lu-admin\src\views\exception\500.vue
-->
<template>
    <page-container :show-breadcrumb="false">
        <Exception status="500" title="500" sub-title="抱歉，服务器报告错误。" />
    </page-container>
</template>

<script lang="ts" setup>
    import Exception from '@/components/System/Exception/index.vue'
    
    defineOptions({
        name: '404'
    })
</script>