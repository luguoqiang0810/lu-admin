/*
 * @Author: lgq
 * @Date: 2024-08-26 11:01:42
 * @LastEditors: lgq
 * @LastEditTime: 2024-11-05 15:37:47
 * @Description: file content
 * @FilePath: \lu-admin\src\plugins\Router\utils.ts
 */
import { h } from 'vue'
import nProgress from 'nprogress';
import Setting from '@/setting/index'
import { useUserStore } from '@/plugins/Store'
import { orderBy } from 'xe-utils-es'
import { iconFont } from '@/plugins/Iconfont/index'
import type { RouterModule, AppRouteModule } from '@/types/index'
import type { Router } from 'vue-router'
import type { Menu } from '@/types/index'

const modules: Record<string, RouterModule> = import.meta.glob('@/plugins/Router/modules/*.ts', { eager: true })
const views = import.meta.glob('@/views/**/**.vue')
const pageLayout = () => import(`@/components/System/Layout/Page.vue`)
const routeModuleList: AppRouteModule[] = [];
const { whitePathList } = Setting.router

const PAGE_LAYOUT = 'components/System/Layout/Page.vue'
const PAGE_NOT_FOUND_NAME = 'PageNotFound';
const LOGIN_PAGE = '/login'

nProgress.configure({ showSpinner: false })

// 加入到路由集合中
Object.keys(modules).forEach((key) => {
    const mod = (modules[key].default || {}) as AppRouteModule;
    routeModuleList.push(mod);
});

// 路径转换
const transformPathToComponent = (targ: AppRouteModule[]) => {
    targ.forEach((mod) => {
        if (mod.componentAs === PAGE_LAYOUT) {
            mod.component = pageLayout
        } else if (views[`/src/${mod.componentAs}`]) {
            mod.component = views[`/src/${mod.componentAs}`]
        } else {
            console.error(new Error(`/src/${mod.componentAs} 路径文件不存在，请检查路径`))
        }

        if (mod.children) {
            transformPathToComponent(mod.children)
        }
    })
}
transformPathToComponent(routeModuleList)

export const asyncRoutes = [...[], ...routeModuleList];

// 页面加载状态
const createProgressGuard = (router: Router) => {
    router.beforeEach(() => {
        nProgress.start();
        return true;
    });

    router.afterEach(async () => {
        nProgress.done()
        return true;
    });
}

// 页面权限
const createPermissionGuard = (router: Router) => {
    const userStore = useUserStore()
    router.beforeEach((to, _from, next) => {
        // 白名单
        if (whitePathList.includes(to.name as string)) {
            next()
            return;
        } 

        // 验证登录
        if (!userStore.token) {
            next({
                path: LOGIN_PAGE,
                replace: true
            })
            return;
        }

        // 没有页面
        if (!to.name || to.name === PAGE_NOT_FOUND_NAME) {
            next();
            return;
        }

        next();
    });
}

// 路由守卫
export const setupRouterGuard = (router: Router) => {
    createProgressGuard(router)
    createPermissionGuard(router)
}

// 过滤隐藏的菜单
const menuFilter = (items: AppRouteModule[]) => {
    return items.filter((item: AppRouteModule) => {
        const show = !item.meta?.hideMenu
        if (show && item.children && item.children.length) {
            const children = orderBy(item.children, 'sort')
            item.children = menuFilter(children);
        }
        return show
    })
}

// 整理菜单
const menuArrange = (items: AppRouteModule[]) => {
    return items.map((item: AppRouteModule) => {
        const { path, meta, children, icon } = item
        const menu: Menu = {
            key: path,
            label: meta?.title,
            title: meta?.title as string,
            icon: icon ? () => h(iconFont, { name: icon as string }) : ''
        }
        if (children && children.length) {
            menu.children = menuArrange(children);
        }

        return menu
    })
}

// 获取菜单
export const getMenus = () => {
    // 排序
    const sortMenus = orderBy(asyncRoutes, 'sort')

    // 整理成可用菜单
    const menus = menuArrange(menuFilter(sortMenus))
    
    return menus
}