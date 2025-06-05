<!--
 * @Author: lgq
 * @Date: 2025-04-24 15:29:22
 * @LastEditors: lgq
 * @LastEditTime: 2025-06-03 17:24:55
 * @Description: file content
 * @FilePath: \lu-admin\src\App.vue
-->
<script setup lang="ts">
	const AuxiliaryTool = import.meta.env.DEV
		? defineAsyncComponent(() => import('./../auxiliaryTool/index.vue'))
		: null;

	const appStore = useAppStore();
	const { theme } = storeToRefs(appStore);
	const { antd } = useI18nLocale();
</script>

<template>
	<a-config-provider :theme="theme" :locale="antd">
		<a-app class="l-full">
			<a-layout class="l-h-100">
				<a-layout-header class="l-is-fixed t-0"> Header </a-layout-header>
				<a-layout-content>
					<div>Content</div>
				</a-layout-content>
				<a-layout-footer class="l-is-fixed b-0"> Footer </a-layout-footer>
			</a-layout>
			<AuxiliaryTool />
		</a-app>
	</a-config-provider>
</template>

<style scoped lang="scss"></style>
