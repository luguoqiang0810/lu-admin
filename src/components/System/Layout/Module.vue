<!--
 * @Author: lgq
 * @Date: 2024-07-18 16:59:13
 * @LastEditors: lgq
 * @LastEditTime: 2024-07-18 17:52:42
 * @Description: file content
 * @FilePath: \lu-admin\src\components\System\Layout\Module.vue
-->
<template>
    <div class="l-body">
        <template v-if="showTabs">
            <div class="l-tabs-content">
                <a-tabs v-model:activeKey="activeKey" hide-add type="editable-card" class="l-tabs">
                    <a-tab-pane key="1111111" tab="1111111" :closable="false"></a-tab-pane>
                    <a-tab-pane key="2222222" tab="2222222" :closable="true"></a-tab-pane>
                    <a-tab-pane key="3333333" tab="3333333" :closable="true"></a-tab-pane>
                    <a-tab-pane key="4444444" tab="4444444" :closable="true"></a-tab-pane>
                    <a-tab-pane key="5555555" tab="5555555" :closable="true"></a-tab-pane>
                    <template #rightExtra>
                        <a-dropdown>
                            <a-button type="link">
                                <IconFont name="MoreOutlined"/>
                            </a-button>
                            <template #overlay>
                                <a-menu>
                                    <a-menu-item>关闭其他</a-menu-item>
                                    <a-menu-item>刷新当前页</a-menu-item>
                                </a-menu>
                            </template>
                        </a-dropdown>
                    </template>
                </a-tabs>
            </div>
        </template>
        <router-view />
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    import Setting from '@/setting/index'

    const { layout } = Setting
    const { showTabs } = layout
    const activeKey = ref<string>('1111111')
</script>

<style lang="less" scoped>
    .l-body {
        .l-tabs-content {
            background: #fff;
            padding-top: 6px;
            .l-tabs {
                :deep(.ant-tabs-nav) {
                    padding-left: 16px;
                }
            }
        }
    }
</style>