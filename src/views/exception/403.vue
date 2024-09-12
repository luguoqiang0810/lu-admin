<!--
 * @Author: lgq
 * @Date: 2024-07-24 10:56:56
 * @LastEditors: lgq
 * @LastEditTime: 2024-09-11 18:19:14
 * @Description: file content
 * @FilePath: \lu-admin\src\views\exception\403.vue
-->
<template>
    <page-container :show-breadcrumb="false">
        <Exception status="403" title="403" sub-title="抱歉，您无权访问此页面。" />
    </page-container>
</template>

<script lang="ts" setup>
    import Exception from '@/components/System/Exception/index.vue'
    
    defineOptions({
        name: '403'
    })
</script>