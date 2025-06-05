<!--
 * @Author: lgq
 * @Date: 2025-05-15 11:30:58
 * @LastEditors: lgq
 * @LastEditTime: 2025-05-30 09:36:31
 * @Description: file content
 * @FilePath: \lu-admin\src\components\IconFont\index.vue
-->
<script lang="ts" setup>
import { createFromIconfontCN } from '@ant-design/icons-vue'

interface Props {
  name?: string
}

withDefaults(defineProps<Props>(), {
  name: '',
})

const appStore = useAppStore()
const IconFont = createFromIconfontCN({
  scriptUrl: appStore.layoutSetting.scriptUrl,
})
</script>

<template>
  <IconFont :type="name" />
</template>

<style scoped></style>
