<!--
 * @Author: lgq
 * @Date: 2024-07-24 10:57:56
 * @LastEditors: lgq
 * @LastEditTime: 2024-09-09 18:14:26
 * @Description: file content
 * @FilePath: \lu-admin\src\views\exception\500.vue
-->
<template>
    <Exception status="500" title="500" sub-title="抱歉，服务器报告错误。" />
</template>

<script lang="ts" setup>
    import Exception from '@/components/System/Exception/index.vue'
    
    defineOptions({
        name: '404'
    })
</script>