<!--
 * @Author: lgq
 * @Date: 2025-05-14 16:56:50
 * @LastEditors: lgq
 * @LastEditTime: 2025-05-15 10:48:33
 * @Description: file content
 * @FilePath: \lu-admin\auxiliaryTool\index.vue
-->

<script setup lang="ts">
	const SettingFilled = defineAsyncComponent(() => import(`@ant-design/icons-vue/SettingFilled`));
</script>

<template>
	<div class="l-entry-button">
		<SettingFilled spin />
	</div>
</template>

<style scoped lang="scss">
	.l-entry-button {
		position: fixed;
		right: 20px;
		bottom: 20px;
		font-size: 30px;
		color: #1677ff;
	}
</style>
