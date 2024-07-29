<!--
 * @Author: lgq
 * @Date: 2024-07-09 17:52:59
 * @LastEditors: lgq
 * @LastEditTime: 2024-07-18 17:06:46
 * @Description: file content
 * @FilePath: \lu-admin\src\components\System\Header\index.vue
-->
<template>
    <vxe-layout-header fixed class="l-layout-header">
        <a-flex align="center" justify="space-between" class="l-flex">
            <a-flex align="center" :gap="24">
                <Logo v-if="layoutMode !== 'sider'" />
                <slot>
                    <span></span>
                </slot>
            </a-flex>
            <a-flex align="center" :gap="24">
                <a-badge count="5">
                    <IconFont name="BellOutlined" class="l-iconfont"/>
                </a-badge>
                <a-dropdown>
                    <a-space size="small" class="l-space">
                        <IconFont name="UserOutlined" class="l-iconfont"/>
                        <div class="l-user-name">Serati Ma</div>
                    </a-space>
                    <template #overlay>
                        <a-menu>
                            <a-menu-item>
                                <a-space size="small">
                                    <IconFont name="LogoutOutlined"/>
                                    <span>退出登录</span>
                                </a-space>
                            </a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
                <a-dropdown>
                    <a-space size="small" class="l-space">
                        <IconFont name="GlobalOutlined" class="l-iconfont"/>
                    </a-space>
                    <template #overlay>
                        <a-menu>
                            <a-menu-item>
                                <a-space size="small">
                                    <span class="l-abbr">CN</span>
                                    <span class="l-name">简体中文</span>
                                </a-space>
                            </a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
            </a-flex>
        </a-flex>
    </vxe-layout-header>
</template>

<script lang="ts" setup>
    import { ref, computed } from 'vue'
    import { theme } from 'ant-design-vue';
    import Setting from '@/setting/index'
    import Logo from '@/components/System/Logo/index.vue'

    const { useToken } = theme;
    const { token } = useToken();
    
    const { layout } = Setting
    const {
        headerHeight: headerHeightAlias,
        headerBackground: headerBackgroundAlias,
        mode
    } = layout
    
    const headerHeight = ref<string>(`${headerHeightAlias}px`)
    const layoutMode = ref<string>(mode)
    const headerBackground = computed(() => {
        return headerBackgroundAlias ? headerBackgroundAlias : token.value.colorPrimary
    })
</script>

<style lang="less" scoped>
    .l-layout-header {
        display: flex;
        align-items: center;
        height: v-bind(headerHeight);
        background: v-bind(headerBackground);
        padding: 0 24px;
        box-shadow: 0 1px 4px rgba(0, 21, 41, .12);
        .l-flex {
            width: 100%;
            height: 100%;
            
            .l-iconfont {
                font-size: 18px;
            }
        }
        .l-space {
            height: v-bind(headerHeight);
            font-size: 16px;
            cursor: pointer;
        }
    }
</style>