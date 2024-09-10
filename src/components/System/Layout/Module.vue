<!--
 * @Author: lgq
 * @Date: 2024-07-18 16:59:13
 * @LastEditors: lgq
 * @LastEditTime: 2024-09-09 18:30:10
 * @Description: file content
 * @FilePath: \lu-admin\src\components\System\Layout\Module.vue
-->
<template>
    <div class="l-body">
        <template v-if="showTabs">
            <div class="l-tabs-content">
                <a-tabs v-model:activeKey="layoutMenu.tabsActiveKey" hide-add type="editable-card" class="l-tabs" @change="tabsChange">
                    <a-tab-pane 
                        v-for="item in layoutMenu.historyMenuList" 
                        :key="item.key" 
                        :closable="routerSetting.redirect !== item.key && layoutMenu.historyMenuList.length > 1"
                    >
                        <template #tab>
                            <a-flex justify="space-between" align="center">
                                <span>{{ item.label }}</span>
                                <IconFont name="ReloadOutlined" class="l-tab-reload" />
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
        <router-view #default="{ Component }">
            <keep-alive :include="layoutMenu.keepAliveIncludes">
                <component :is="Component" />
            </keep-alive>
        </router-view>
    </div>
</template>

<script lang="ts" setup>
    import { useRouter } from 'vue-router'
    import Setting from '@/setting/index'
    import { useLayoutMenu } from '@/plugins/Store/modules/menu'

    const router = useRouter()
    const { layout, router: routerSetting } = Setting
    const { showTabs } = layout
    const layoutMenu = useLayoutMenu()
    const { setMenuActiveKey, getParentPath } = useLayoutMenu()

    const tabsChange = async (targ: string) => {
        await router.push(targ)
        setMenuActiveKey(targ)
        getParentPath()
    }
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
                :deep(.ant-tabs-tab-remove) {
                    padding: 0;
                }
                .l-tab-reload {
                    margin-right: 0;
                    margin-left: 12px;
                }
            }
        }
    }
</style>