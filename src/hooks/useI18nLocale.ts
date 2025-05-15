/*
 * @Author: lgq
 * @Date: 2025-05-14 09:52:15
 * @LastEditors: lgq
 * @LastEditTime: 2025-05-14 16:04:50
 * @Description: file content
 * @FilePath: \lu-admin\src\hooks\useI18nLocale.ts
 */
import { i18n } from '@/plugins/i18n'

export const useI18nLocale = () => {
	// 多语言的信息
	const locale = computed<string>(() => {
		if (!i18n) return 'zh-CN'
		return unref(i18n.global.locale)
	})

	// 获取antd的多语言
	const antd = computed(() => {
		return (i18n?.global?.getLocaleMessage?.(unref(locale)) as any)?.antd || undefined
	})

	return {
		locale,
		antd,
	}
}

