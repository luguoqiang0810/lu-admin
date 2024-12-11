<!--
 * @Author: lgq
 * @Date: 2024-12-10 10:14:27
 * @LastEditors: lgq
 * @LastEditTime: 2024-12-10 15:57:33
 * @Description: file content
 * @FilePath: \lu-admin\autoTools\index.vue
-->
<template>
	<a-button
		type="primary"
		size="large"
		shape="circle"
		class="l-auto-tools"
		@click="openPopup"
	>
		<IconFont name="SettingOutlined" spin class="l-icon-font" />
	</a-button>
	<a-modal
		v-model:open="popupOpen"
		title="自动化工具"
		:width="1400"
		:keyboard="false"
		:mask-closable="false"
		:footer="null"
	>
		<a-flex>
			<a-flex class="l-menu">
				<a-menu mode="inline" :items="items" />
			</a-flex>
			<a-flex flex="1">
				<div>123546987</div>
			</a-flex>
		</a-flex>
	</a-modal>
</template>

<script lang="ts" setup>
	import { ref, h } from 'vue';
	import { BgColorsOutlined } from '@ant-design/icons-vue';
	import type { ItemType } from 'ant-design-vue';

	const popupOpen = ref<boolean>(true);
	const openPopup = () => {
		popupOpen.value = true;
	};

	const items = ref<ItemType[]>([
		{
			key: '1',
			label: '主题',
			icon: () => h(BgColorsOutlined),
		},
	]);
</script>

<style lang="less" scoped>
	.l-auto-tools {
		position: fixed;
		right: 10px;
		bottom: 10px;
		.l-icon-font {
			font-size: 28px;
		}
	}
	.l-menu {
		width: 116px;
	}
</style>
