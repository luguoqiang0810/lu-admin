import { ref, shallowRef } from 'vue'
import { defineStore } from 'pinia'
import type { Recordable } from '@/types/index'

export const useUserStore = defineStore('userInfo', () => {
    const userInfo = shallowRef<Recordable>()
    const token = ref<string>('132456')
    const permission = ref<string[]>([])

    // 设置用户信息
    const setUserInfo = (targ: Recordable) => {
        userInfo.value = targ
    }

    // 设置token
    const setToken = (targ: string) => {
        token.value = targ
    }

    // 设置权限码
    const setPermission = (targ: string[]) => {
        permission.value = targ
    }

    return {
        userInfo,
        token,
        permission,
        setUserInfo,
        setToken,
        setPermission
    }
})

