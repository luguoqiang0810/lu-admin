<!--
 * @Author: lgq
 * @Date: 2024-07-24 10:56:56
 * @LastEditors: lgq
 * @LastEditTime: 2024-09-09 18:14:15
 * @Description: file content
 * @FilePath: \lu-admin\src\views\exception\404.vue
-->
<template>
    <Exception status="404" title="404" sub-title="抱歉，您访问的页面不存在。" />
</template>

<script lang="ts" setup>
    import Exception from '@/components/System/Exception/index.vue'

    defineOptions({
        name: '404'
    })
</script>