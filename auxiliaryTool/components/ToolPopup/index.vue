<!--
 * @Author: guoqiang.lu
 * @Date: 2025-07-23 11:10:51
 * @LastEditors: guoqiang.lu
 * @LastEditTime: 2025-07-23 17:47:17
 * @Description: custom
 * @FilePath: \lu-admin\auxiliaryTool\components\ToolPopup\index.vue
-->
<template>
  <a-modal
    v-model:open="visible"
    title="ToolPopup"
    :footer="null"
    :keyboard="false"
    :mask-closable="false"
    :width="800"
  >
    <div class="l-tool-popup-body">
      <a-tabs v-model:activeKey="activeKey" tab-position="left" class="l-tool-popup-tabs">
        <a-tab-pane v-for="item in items" :key="item.key">
          <template #tab>
            <span>
              <component :is="item.icon" />
              {{ item.label }}
            </span>
          </template>
          <component :is="item.module" />
        </a-tab-pane>
      </a-tabs>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
import { SkinOutlined } from "@ant-design/icons-vue";
import PageSetupModule from "../PageSetupModule/index.vue";

const visible = ref(true);
const activeKey = ref("page");
const items = shallowRef([
  {
    key: "page",
    icon: SkinOutlined,
    label: "页面设置",
    module: PageSetupModule,
  },
]);

const openPopup = () => {
  visible.value = true;
};

defineExpose({
  openPopup,
});
</script>

<style scoped>
.l-tool-popup-body {
  height: 600px;
  .l-tool-popup-tabs {
    height: 100%;
  }
}
</style>
