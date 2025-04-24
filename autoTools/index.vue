<!--
 * @Author: lgq
 * @Date: 2024-12-10 10:14:27
 * @LastEditors: lgq
 * @LastEditTime: 2025-04-24 10:53:01
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
		:width="800"
		:keyboard="false"
		:mask-closable="false"
		:footer="null"
	>
		<a-tabs v-model:activeKey="activeKey" tab-position="left">
			<a-tab-pane key="1">
				<template #tab>
					<IconFont name="BgColorsOutlined" />
					<span>主题</span>
				</template>
				<div class="l-tab-pane-con">
					<Theme @ok="saveSet" />
				</div>
			</a-tab-pane>
		</a-tabs>
	</a-modal>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	import Theme from './components/theme/index.vue';

	const popupOpen = ref<boolean>(false);
	const openPopup = () => {
		popupOpen.value = true;
	};

	const activeKey = ref<string>('1');

	const saveSet = (targ: any) => {
		console.log(targ, '00000000000000000');
	};
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
	.l-tab-pane-con {
		height: 700px;
		overflow-y: auto;
	}
</style>
