<!--
 * @Author: lgq
 * @Date: 2024-07-08 16:53:41
 * @LastEditors: lgq
 * @LastEditTime: 2024-07-09 17:02:42
 * @Description: file content
 * @FilePath: \lu-admin\src\App.vue
-->
<template>
  <a-config-provider :theme="theme">
    <router-view />
  </a-config-provider>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'
  import Setting from '@/setting/index'

  const { theme: themeAlias } = Setting
  const theme = reactive(themeAlias)
</script>

<style scoped></style>
