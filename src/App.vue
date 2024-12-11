<!--
 * @Author: lgq
 * @Date: 2024-07-08 16:53:41
 * @LastEditors: lgq
 * @LastEditTime: 2024-12-10 16:08:31
 * @Description: file content
 * @FilePath: \lu-admin\src\App.vue
-->
<template>
	<a-config-provider :theme="theme" :locale="zhCN">
		<router-view></router-view>
		<AsyncComp />
	</a-config-provider>
</template>

<script setup lang="ts">
	import { reactive, createCommentVNode, defineAsyncComponent } from 'vue';
	import { configure } from '@/setting/index';
	import { useTitle } from 'vue-hooks-plus';
	import zhCN from 'ant-design-vue/es/locale/zh_CN';

	const { theme: themeAlias } = configure;
	const theme = reactive(themeAlias);
	const AsyncComp = import.meta.env.DEV
		? defineAsyncComponent(() => import('./../autoTools/index.vue'))
		: createCommentVNode();

	useTitle('123');
</script>

<style scoped>
	.ant-custom-skeleton-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		padding: 24px;
		overflow: hidden;
		box-sizing: border-box;
	}
</style>
