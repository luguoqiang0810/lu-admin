<!--
 * @Author: lgq
 * @Date: 2024-07-18 16:59:13
 * @LastEditors: lgq
 * @LastEditTime: 2024-11-05 19:11:37
 * @Description: file content
 * @FilePath: \lu-admin\src\components\System\Layout\Module.vue
-->
<template>
    <div class="l-body">
        <template v-if="showTabs">
            <div class="l-tabs-content">
                <a-tabs 
                    v-model:activeKey="layoutMenu.tabsActiveKey" 
                    hide-add 
                    type="editable-card" 
                    class="l-tabs" 
                    @change="tabsChange"
                    @edit="onEdit"
                >
                    <a-tab-pane 
                        v-for="item in layoutMenu.historyMenuList" 
                        :key="item.key" 
                        :closable="routerSetting.redirect !== item.key && layoutMenu.historyMenuList.length > 1"
                    >
                        <template #tab>
                            <a-flex justify="space-between" align="center">
                                <span>{{ item.label }}</span>
                                <IconFont v-if="layoutMenu.tabsActiveKey === item.key" name="ReloadOutlined" class="l-tab-reload" @click.native="refreshUnit" />
                            </a-flex>
                        </template>
                    </a-tab-pane>
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
        <router-view #default="{ Component }" :key="unitKey">
            <keep-alive :include="[...layoutMenu.keepAliveIncludes, 'Page']">
                <component :is="Component"/>
            </keep-alive>
        </router-view>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { theme } from 'ant-design-vue'
    import { uniqueId } from 'xe-utils-es'
    import Setting from '@/setting/index'
    import { useLayoutMenu } from '@/plugins/Store'

    const router = useRouter()
    const layoutMenu = useLayoutMenu()
    const { removeHistoryMenuList } = useLayoutMenu()
    const { layout, router: routerSetting } = Setting
    const { showTabs } = layout
    const { useToken } = theme
    const { token } = useToken()
    const colorText = ref<string>(token.value.colorText)
    const colorPrimary = ref<string>(token.value.colorPrimary)
    const unitKey = ref<string>(uniqueId('unit_'))

    // 切换标签页
    const tabsChange = (targ: string) => {
        router.push(targ)
    }

    // 删除标签页
    const onEdit = (targetKey: string, action: string) => {
        if (action === 'remove') {
            removeHistoryMenuList(targetKey)
        }
    }

    // 刷新页面
    const refreshUnit = () => {
        unitKey.value = uniqueId('unit_')
    }
</script>

<style lang="less" scoped>
    .l-body {
        .l-tabs-content {
            position: sticky;
            top: 0;
            background: #fff;
            padding-top: 6px;
            .l-tabs {
                :deep(.ant-tabs-nav) {
                    padding-left: 16px;
                }
                :deep(.ant-tabs-tab-remove) {
                    padding: 0;
                }
                .l-tab-reload {
                    margin-right: 0;
                    margin-left: 12px;
                    color: v-bind(colorText);
                    &:hover {
                        color: v-bind(colorPrimary);
                    }
                }
            }
        }
    }
</style>