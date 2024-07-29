<!--
 * @Author: lgq
 * @Date: 2024-07-24 10:59:09
 * @LastEditors: lgq
 * @LastEditTime: 2024-07-24 11:13:04
 * @Description: file content
 * @FilePath: \lu-admin\src\components\System\Exception\index.vue
-->
<template>
    <a-result :status="status" :title="title" :sub-title="subTitle">
        <template #extra>
            <a-button type="primary">返回首页</a-button>
        </template>
    </a-result>
</template>

<script lang="ts" setup>
    interface Props {
        status: '403' | '404' | '500'
        title: string
        subTitle: string
    }

    defineProps<Props>()
</script>