<!--
 * @Author: lgq
 * @Date: 2025-05-15 11:30:58
 * @LastEditors: lgq
 * @LastEditTime: 2025-05-15 11:41:51
 * @Description: file content
 * @FilePath: \lu-admin\src\components\IconFont\index.vue
-->
<script lang="ts" setup>
	import { createFromIconfontCN } from '@ant-design/icons-vue';

	interface Props {
		name: string;
	}

	const appStore = useAppStore()

	const props = withDefaults(defineProps<Props>(), {
		name: ''
	});

	const IconFont = createFromIconfontCN({
		scriptUrl: appStore.layoutSetting.scriptUrl,
	});
</script>

<template>
	<icon-font :type="name" />
</template>

<style scoped></style>
