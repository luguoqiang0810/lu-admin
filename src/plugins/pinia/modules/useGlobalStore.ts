import type { MessageInstance } from 'ant-design-vue/es/message/interface'
import type { ModalStaticFunctions } from 'ant-design-vue/es/modal/confirm'
import type { NotificationInstance } from 'ant-design-vue/es/notification/interface'
/*
 * @Author: lgq
 * @Date: 2025-05-14 16:30:51
 * @LastEditors: lgq
 * @LastEditTime: 2025-05-14 17:52:06
 * @Description: file content
 * @FilePath: \lu-admin\src\plugins\pinia\modules\useGlobalStore.ts
 */
import { App } from 'ant-design-vue'

export const useGlobalStore = defineStore('global', () => {
  const message = ref<MessageInstance>()
  const notification = ref<NotificationInstance>()
  const modal = ref<Omit<ModalStaticFunctions, 'warn'>>();

  (() => {
    const staticFunction = App.useApp()
    message.value = staticFunction.message
    notification.value = staticFunction.notification
    modal.value = staticFunction.modal
  })()

  return { message, notification, modal }
})
