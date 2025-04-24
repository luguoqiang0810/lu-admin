<!--
 * @Author: lgq
 * @Date: 2024-12-11 10:46:35
 * @LastEditors: lgq
 * @LastEditTime: 2024-12-11 16:21:37
 * @Description: file content
 * @FilePath: \lu-admin\autoTools\components\theme\index.vue
-->
<template>
	<div class="l-custom-content">
		<a-flex justify="flex-end">
			<a-button type="primary" @click="saveSet">保存</a-button>
		</a-flex>
		<a-form
			ref="formRef"
			:label-col="{ span: 4 }"
			layout="vertical"
			:model="formState"
		>
			<a-form-item label="项目名称" name="systemName">
				<a-input v-model:value="formState.systemName" />
			</a-form-item>
			<a-form-item label="主题色" name="colorPrimary">
				<a-row :gutter="[0, 10]">
					<a-col :span="24">
						<a-flex :gap="8">
							<div
								v-for="item in colorGroup"
								:key="item"
								class="l-theme-color-block"
								:style="`background: ${item}`"
								@click="formState.colorPrimary = item"
							>
								<template v-if="item === formState.colorPrimary">
									<IconFont name="CheckOutlined" />
								</template>
							</div>
						</a-flex>
					</a-col>
					<a-col :span="24">
						<a-input type="color" v-model:value="formState.colorPrimary" />
					</a-col>
				</a-row>
			</a-form-item>
		</a-form>
	</div>
</template>

<script lang="ts" setup>
	import { ref, reactive } from 'vue';
	import { configure } from '@/setting';
	import type { UnwrapRef } from 'vue';

	interface FormState {
		systemName: string;
		colorPrimary: string;
	}

	const emit = defineEmits(['ok']);

	const { systemName, theme } = configure;
	const { token } = theme;
	const { colorPrimary } = token;

	// 表单
	const formRef = ref<any>();
	const formState = reactive<UnwrapRef<FormState>>({
		systemName,
		colorPrimary,
	});

	// 主题色组
	const colorGroup = ref<string[]>([
		'#1677ff',
		'#f5222d',
		'#fa541c',
		'#faad14',
		'#13c2c2',
		'#52c41a',
		'#2f54eb',
		'#722ed1',
	]);

	// 保存设置
	const saveSet = () => {
		emit('ok', formState);
	};
</script>

<style lang="less" scoped>
	.l-theme-color-block {
		width: 20px;
		height: 20px;
		border-radius: 2px;
		color: #fff;
		text-align: center;
		line-height: 20px;
		cursor: pointer;
	}
</style>
