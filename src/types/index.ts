/*
 * @Author: lgq
 * @Date: 2024-07-18 15:21:22
 * @LastEditors: lgq
 * @LastEditTime: 2024-11-05 15:36:02
 * @Description: file content
 * @FilePath: \lu-admin\src\types\index.ts
 */
import { watch } from 'vue'
import type { defineComponent, VNode, Ref } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import type { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';

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
    name?: string | symbol | undefined
    title?: string
    icon?: VNode | ((item: Menu) => VNode) | string;
    children?: Menu[]
}


export type AppRouteModule = AppRouteRecordRaw

export interface InterfacesItem extends Pick<AxiosRequestConfig, 'url' | 'method' | 'headers'> {
    category?: string
    prefix?: string
    name?: string
    desc?: string
}

export interface Interfaces {
    [x: string]: InterfacesItem
}

export interface AxiosModules {
    [x: string]: InterfacesItem[]
}

export interface ConfigProps extends InternalAxiosRequestConfig {
    category?: string
    name?: string
    withToken?: boolean
    prefix?: string
    desc?: string
}

export interface ResResponse {
    code: string | number,
    data: any,
    message: string
}

export interface UseRequestOptions {
    /**
     * 是否不进行任何处理，直接返回
     * 用于页面代码可能需要直接获取code，data，message这些信息时开启
     */
    isTransformResponse?: boolean

    /**
     * 是否直接展示提示信息
     * 适用于一些结果操作
     */
    isDirectMessage?: boolean

    /**
     * 格式化返回数据
     * @param res ResResponse
     * @returns any
     */
    formatResult?: (res: any) => any

    
    /**
     * 初始化数据。
     */
    initialData?: any

    
    /**
     * - 默认 false。 即在初始化时自动执行 service。
     * - 如果设置为 true，则需要手动调用 run 或 runAsync 触发执行。
     */
    manual?: boolean;
    /**
     * 	首次默认执行时，传递给 service 的参数
     */
    defaultParams?: any;
    /**
     * service 执行前触发
     * @param params TParams
     * @returns void
     */
    onBefore?: (params: any) => void;
    /**
     * service resolve 时触发
     * @param data TData
     * @param params TParams
     * @returns void
     */
    onSuccess?: (data: any, params: any) => void;
    /**
     * service reject 时触发
     * @param e Error
     * @param params TParams
     * @returns void
     */
    onError?: (e: Error, params: any) => void;
    /**
     * service 执行完成时触发
     * @param params TParams
     * @param data TData
     * @param e Error
     * @returns void
     */
    onFinally?: (params: any, data?: any, e?: Error) => void;
    /**
     * 当其值为 false 时，请求永远都不会发出
     * 1、当 manual=false 自动请求模式时，每次 ready 从 false 变为 true 时，都会自动发起请求，会带上参数 options.defaultParams。
     * 2、当 manual=true 手动请求模式时，只要 ready=false，则通过 run/runAsync 触发的请求都不会执行。
     */
    ready?: Ref<boolean> | boolean;
    /**
     * 注意：只有自动模式模式，即 manual 不为 true ，依赖刷新配置才会生效。
     * 依赖响应式对象数组,和 vue 的 watch 传入监听的对象用法一致。
     * 如果设置为 true，则会自动收集依赖执行，也支持和 ready 搭配使用
     */
    refreshDeps?: Parameters<typeof watch>[0][] | boolean;
    refreshDepsAction?: () => void;


    /**
     * 设置 loading 变成 true 的延迟时间。
     *
     */
    loadingDelay?: number | Ref<number>;


    /**
     * 在 dev 模式下会开启 devtools
     */
    debugKey?: string;


    /**
     * 轮询间隔，单位为毫秒。如果值大于 0，则启动轮询模式。
     */
    pollingInterval?: Ref<number> | number;
    /**
     * 在页面隐藏时，是否继续轮询。如果设置为 false，在页面隐藏时会暂时停止轮询，页面重新显示时继续上次轮询。
     */
    pollingWhenHidden?: boolean;
    /**
     * 轮询错误重试次数。如果设置为 -1，则无限次
     */
    pollingErrorRetryCount?: number;



    /**
     * 在屏幕重新获取焦点或重新显示时，重新发起请求
     */
    refreshOnWindowFocus?: Ref<boolean> | boolean;
    /**
     * 重新请求间隔，单位为毫秒
     */
    focusTimespan?: Ref<number> | number;



    /**
     * 防抖等待时间, 单位为毫秒，设置后，进入防抖模式
     */
    debounceWait?: Ref<number> | number;
    /**
     * 在延迟开始前执行调用
     */
    debounceLeading?: Ref<boolean> | boolean;
    /**
     * 在延迟结束后执行调用
     */
    debounceTrailing?: Ref<boolean> | boolean;
    /**
     * 允许被延迟的最大值
     */
    debounceMaxWait?: Ref<number> | number;




    /**
     * 节流等待时间, 单位为毫秒，设置后，进入节流模式
     */
    throttleWait?: Ref<number> | number;
    /**
     * 在节流开始前执行调用
     */
    throttleLeading?: Ref<boolean> | boolean;
    /**
     * 在节流结束后执行调用
     */
    throttleTrailing?: Ref<boolean> | boolean;



    /**
     * 请求唯一标识。如果设置了 cacheKey，我们会启用缓存机制。同一个 cacheKey 的数据全局同步。
     */
    cacheKey?: string;
    /**
     * - 设置缓存数据回收时间。默认缓存数据 5 分钟后回收
     * - 如果设置为 -1, 则表示缓存数据永不过期
     */
    cacheTime?: number;
    /**
     * - 缓存数据保持新鲜时间。在该时间间隔内，认为数据是新鲜的，不会重新发请求
     * - 如果设置为 -1，则表示数据永远新鲜
     */
    staleTime?: number;
    /**
     * - 自定义设置缓存
     * - setCache 和 getCache 需要配套使用
     * - 在自定义缓存模式下，cacheTime 和 clearCache 不会生效，请根据实际情况自行实现。
     * @param data CachedData
     * @returns void
     */
    setCache?: (data: any) => void;
    /**
     *  自定义读取缓存
     * @param params TParams
     * @returns CachedData
     */
    getCache?: (params: any) => any | undefined;



    /**
     * 错误重试次数。如果设置为 -1，则无限次重试。
     */
    retryCount?: number;
    /**
     * - 重试时间间隔，单位为毫秒。
     * 如果不设置，默认采用简易的指数退避算法，取 1000 * 2 ** retryCount，也就是第一次重试等待 2s，第二次重试等待 4s，以此类推，如果大于 30s，则取 30s
     */
    retryInterval?: number;


    /**
     * - 中间件。
     * - 中间件的执行顺序是按照数组的顺序执行的，数组中的第一个中间件的参数是下一个中间件的参数。
     * - 中间件的最后一个参数是 run 或者 runAsync 方法。
     * - 中间件的返回值会传递给下一个中间件。
    */
    use?: any[];

    /**
     * 是否启用回退功能。如果设置为 true，则当 service 执行失败时，会自动回退到上一次成功的结果。
     */
    rollbackOnError?: boolean | ((params: any) => boolean);
}

export interface UseRequestResult {
    /**
     * service 是否正在执行
     */
    loading: Readonly<Ref<boolean>>;
     /**
     * service 返回的数据
     */
    data: Readonly<Ref<any>>;
    /**
     * 	service 抛出的异常
     */
    error: Readonly<Ref<Error | undefined>>;
    /**
     * 当次执行的 service 的参数数组。比如你触发了 run(1, 2, 3)，则 params 等于 [1, 2, 3]
     */
    params: Readonly<Ref<unknown[] | []>>;
    /**
     * 取消当前正在进行的请求
     */
    cancel(): void;
    /**
     * 使用上一次的 params，重新调用 run
     */
    refresh(): void;
    /**
     * 使用上一次的 params，重新调用 runAsync
     */
    refreshAsync(): Promise<any>;
    /**
     * 手动触发 service 执行，参数会传递给 service
     * 异常自动处理，通过 onError 反馈
     */
    run(...params: any): void;
    /**
     * 与 run 用法一致，但返回的是 Promise，需要自行处理异常。
     */
    runAsync(...params: any): Promise<any>;
    /**
     * 直接修改 data
     */
    mutate(data?: any): void;
}