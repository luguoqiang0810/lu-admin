<!--
 * @Author: lgq
 * @Date: 2025-05-14 16:56:50
 * @LastEditors: guoqiang.lu
 * @LastEditTime: 2025-07-23 11:24:58
 * @Description: file content
 * @FilePath: \lu-admin\auxiliaryTool\index.vue
-->
<script setup lang="ts">
	const SettingFilled = defineAsyncComponent(() => import(`@ant-design/icons-vue/SettingFilled`));
  const ToolPopup = defineAsyncComponent(() => import('./components/ToolPopup/index.vue'));
  const toolPopupRef = useTemplateRef('toolPopupRef');

  const openPopup = () => {
    toolPopupRef.value.openPopup();
  };
</script>

<template>
	<div class="l-entry-button">
		<SettingFilled spin @click="openPopup" />
	</div>
  <ToolPopup ref="toolPopupRef" />
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
