/*
 * @Author: lgq
 * @Date: 2024-07-18 15:21:22
 * @LastEditors: lgq
 * @LastEditTime: 2024-09-09 11:26:38
 * @Description: file content
 * @FilePath: \lu-admin\src\types\index.ts
 */
import type { RouteRecordRaw } from 'vue-router'
import type { defineComponent, VNode } from 'vue'

export type Component<T = any> = ReturnType<typeof defineComponent> | (() => Promise<T>)
  
export type Recordable<T = any> = {
    [x: string]: T
}

export type AppRouteRecordRaw = RouteRecordRaw & {
    componentAs?: string
    sort?: number
    icon?: string
}

export interface RouterModule {  
    default?: AppRouteRecordRaw 
} 

export interface Menu {
    key: string
    label: any
    title?: string
    icon?: VNode | ((item: Menu) => VNode) | string;
    children?: Menu[]
}


export type AppRouteModule = AppRouteRecordRaw