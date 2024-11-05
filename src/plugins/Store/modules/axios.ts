/*
 * @Author: lgq
 * @Date: 2024-09-14 18:10:30
 * @LastEditors: lgq
 * @LastEditTime: 2024-09-18 16:16:24
 * @Description: file content
 * @FilePath: \lu-admin\src\plugins\Store\modules\axios.ts
 */

import { ref } from 'vue';
import { defineStore } from 'pinia'
import { Interfaces } from '@/types/index'


const useInterfaces = defineStore('interfaces', () => {
    const interfaces = ref<Interfaces>({})

    const setInterfaces = (targ: Interfaces) => {
        interfaces.value = targ
    }

    return {
        interfaces,
        setInterfaces
    }
})

export default useInterfaces