<!--
 * @Author: guoqiang.lu
 * @Date: 2025-07-23 17:40:34
 * @LastEditors: guoqiang.lu
 * @LastEditTime: 2025-07-24 16:45:45
 * @FilePath: \lu-admin\auxiliaryTool\components\PageSetupModule\index.vue
 * @Description: custom
-->
<template>
  <a-form :label-col="labelCol" :model="layoutSetting">
    <a-form-item label="项目名称" name="systemName">
      <a-input v-model:value="layoutSetting.systemName" />
    </a-form-item>
    <a-form-item label="主题色" name="colorPrimary">
      <a-input v-model:value="layoutSetting.colorPrimary" type="color" />
      <a-flex :gap="8" class="l-mt-4">
        <a-tooltip v-for="(color, index) in colors" :key="color">
          <template #title>{{ colorsName[index] }}</template>
          <div :style="{ backgroundColor: color }" class="l-color l-flex l-flex-align-center l-flex-justify-center" @click="handleColorChange(color)">
            <template v-if="layoutSetting.colorPrimary === color">
              <CheckOutlined />
            </template>
          </div>
        </a-tooltip>
      </a-flex>
    </a-form-item>
    <a-form-item label="导航模式" name="layout">

    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
  import { CheckOutlined } from '@ant-design/icons-vue'

  const appStore = useAppStore();
  const { setLayoutSetting } = useAppStore();
  const { layoutSetting } = storeToRefs(appStore);
  const colors = ['#1677ff', '#f5222d', '#fa541c', '#faad14', '#13c2c2', '#52c41a', '#2f54eb', '#722ed1']
  const colorsName = ['拂晓蓝', '薄暮', '火山', '日暮', '明青', '极光绿', '极客蓝', '酱紫']
  const labelCol = { style: { width: '100px' } };

  const handleColorChange = (val: string) => {
    setLayoutSetting('colorPrimary', val)
  }
</script>

<style scoped lang="scss">
.l-mt-4 {
  margin-top: 16px;
}
.l-color {
  width: 20px;
  height: 20px;
  border-radius: 2px;
  cursor: pointer;
  color: #fff;
}
</style>
