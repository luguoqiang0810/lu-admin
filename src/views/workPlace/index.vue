<!--
 * @Author: lgq
 * @Date: 2024-07-18 15:38:56
 * @LastEditors: lgq
 * @LastEditTime: 2024-11-01 16:18:33
 * @Description: file content
 * @FilePath: \lu-admin\src\views\workPlace\index.vue
-->
<template>
    <page-container :show-breadcrumb="false">
        <div class="custom-content">
            <div>{{ data }}</div>
            <div>{{ loading }}</div>
            <div>工作台</div>
            <div>工作台</div>
            <div>工作台</div>
            <div>工作台</div>
            <div>工作台</div>
            <div>工作台</div>
            <div>工作台</div>
            <div>工作台</div>
            <a-input></a-input>
        </div>
    </page-container>
</template>

<script lang="ts" setup>
    import { onMounted } from 'vue'
    import { useRequest } from '@/hooks/index'

    const { data, loading } = useRequest('workPlace/getWorkPlace')

    defineOptions({
        name: 'WorkPlace'
    })

    onMounted(() => {
        // run()
    })
</script>

<style lang="less" scoped>

</style>