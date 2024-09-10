<!--
 * @Author: lgq
 * @Date: 2024-07-24 10:59:09
 * @LastEditors: lgq
 * @LastEditTime: 2024-08-28 17:50:31
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
        status?: '403' | '404' | '500'
        title?: string
        subTitle?: string
    }

    withDefaults(defineProps<Props>(), {
        status: '404',
        title: '404',
        subTitle: '抱歉，您访问的页面不存在。'
    })
</script>