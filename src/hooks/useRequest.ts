/*
 * @Author: lgq
 * @Date: 2024-09-18 09:56:37
 * @LastEditors: lgq
 * @LastEditTime: 2024-11-05 15:42:25
 * @Description: useRequest 方法根据 vue-hooks-plus 的 useRequest 二次封装而来，更详细的参数和方法可查看官方文档 https://inhiblabcore.github.io/docs/hooks/
 * @FilePath: \lu-admin\src\hooks\useRequest.ts
 */
import axios from 'axios'
import useRequest from 'vue-hooks-plus/es/useRequest'
import { notification, message } from 'ant-design-vue';
import { useInterfaces, useUserStore } from '@/plugins/Store/index'
import Setting from '@/setting/index'
import { ResultEnum } from '@/enums/httpEnum'
import type {
    AxiosInstance,
    CreateAxiosDefaults,
    AxiosResponse,
    AxiosError
} from 'axios';
import type { ConfigProps, UseRequestOptions, ResResponse, UseRequestResult } from '@/types/index'

const axiosInstance: AxiosInstance = axios.create(Setting.request as CreateAxiosDefaults)

// 请求拦截器
axiosInstance.interceptors.request.use(
    (config: ConfigProps) => {
        // 给需要添加 token 的接口添加
        const { token } = useUserStore()
        if (token && config.withToken) {
            config.headers.Authorization = `Bearer ${token}`
        }
        // 添加前缀
        if (import.meta.env.DEV) {
            config.baseURL = config.prefix || '/api'
        }

        return config
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
)

// 响应拦截器
axiosInstance.interceptors.response.use(
    (res: AxiosResponse<any>) => {
        if (res?.status === 200) {
            return Promise.resolve(res.data)
        } else {
            return Promise.reject(res)
        }
    },
    (error: AxiosError) => {
        const { message, response } = error || {}
        const { config } = response || {}
        const description = `服务响应-${message}\n${config?.baseURL}${config?.url}`

        notification.error({
            message: '请求错误',
            description
        })

        return Promise.reject(error) 
    }
)

// 默认请求配置
const defaultUseRequestOptions: UseRequestOptions = {
    isTransformResponse: false,
    isDirectMessage: false,
    formatResult: (res: any) => res
}


// 处理返回结果
const transformResponseHook = (res: ResResponse, options: UseRequestOptions) => {
    const { isTransformResponse, isDirectMessage, formatResult } = options

    // 不进行任何处理，直接返回
    // 用于页面代码可能需要直接获取code，data，message这些信息时开启
    if (isTransformResponse) {
        return res
    }
    
    const { code, data, message: description } = res

    // 直接展示提示信息
    // 适用于一些结果操作
    if (isDirectMessage) {
        message[code === ResultEnum.SUCCESS ? 'success' : 'error'](description)
        return res
    }
    
    // 返回数据
    if (code === ResultEnum.SUCCESS) {
        const formattedResult = formatResult ? formatResult(data) : data
        return formattedResult
    }

    // 其他状态码
    switch (code) {
        case ResultEnum.TIMEOUT:
            notification.error({
                message: '提示',
                description: '登录过期'
            })
            // 跳转的登录页
            break;
        default:
            notification.error({
                message: '提示',
                description
            })
    }

    return res
}

const vAxios = (url: string, options: UseRequestOptions = defaultUseRequestOptions): UseRequestResult => {
    const { interfaces } = useInterfaces()
    const { isTransformResponse, isDirectMessage, formatResult, ...otherOptions } = options

    const request = <ResponseType = unknown>(url: string): Promise<ResponseType> => {
        if (!Reflect.has(interfaces, url)) {
            const [one, two] = url.split('/')
            throw new Error(`plugins/Axios/modules/${one}.ts 文件下没有 name 为 ${two} 的接口`); 
        }

        return axiosInstance.request(interfaces[url])
    }

    return useRequest(() => request(url), {
        formatResult(res: any) {
            const ret = transformResponseHook(res, { isTransformResponse, isDirectMessage, formatResult })
            return ret
        },
        ...otherOptions
    })
}

export default vAxios