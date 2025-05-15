/*
 * @Author: lgq
 * @Date: 2025-05-06 16:04:09
 * @LastEditors: lgq
 * @LastEditTime: 2025-05-13 14:17:04
 * @Description: file content
 * @FilePath: \lu-admin\eslint.config.js
 */
import antfu from '@antfu/eslint-config'

export default antfu(
    {
        vue: true,
        formatters: true, // 启用自动格式化
		stylistic: {
			indent: 4 // 强制所有文件类型使用4空格缩进
		},
        ignores: [
            'types/auto-imports.d.ts',
            'types/components.d.ts',
            'public',
            'tsconfig.*.json',
            'tsconfig.json',
            'dist*',
            'vite.config.ts',
            'eslint.config.js',
			'stylelint.config.js'
        ],
    },
    {
        rules: {
			// 0=off  1=warn  2=error
            'no-console': 'off', // 关闭console语句检查
            'no-var': 'error', // 禁止使用var
            'no-dupe-keys': 'error', // 禁止对象重复键名
            'no-empty': 'error', // 禁止空代码块（如 if(){} 无内容）
            'style/indent': ['error', 4, {
				"ignoredNodes": ['TemplateLiteral'], // 忽略模板字符串
				"SwitchCase": 1, // switch case 缩进级别
				"flatTernaryExpressions": true // 三元表达式缩进
			}], // 强制4空格缩进
            'style/quote-props': 'off', // 允许对象属性不加引号
			'vue/component-name-in-template-casing': ['error', 'PascalCase'], // 强制模板中的组件名使用大驼峰格式(如<MyComponent>)
			'vue/no-v-html': 'warn',          // 慎用v-html指令（防范XSS攻击）
			'vue/attributes-order': ['error', { // 强制属性顺序
				order: [
					'DEFINITION',        // 定义属性(如:key)
					'LIST_RENDERING',    // 列表渲染(v-for)
					'CONDITIONALS',      // 条件渲染(v-if/v-else)
					'UNIQUE',            // 唯一属性(ref)
					'GLOBAL',            // 全局属性(id等)
					'TWO_WAY_BINDING',   // 双向绑定(v-model)
					'OTHER_DIRECTIVES',  // 其他指令(v-custom)
					'EVENTS',            // 事件监听(@click)
				]
			}],
            'vue/max-attributes-per-line': ['error', { // 强制每行属性数量不超过指定数量
                'singleline': 5, // 单行属性数量限制
                'multiline': {
                    'max': 1, // 多行属性数量限制
                },
            }],
			'vue/html-indent': ['error', 4, {
                "attribute": 1,          // 属性缩进1级（4空格）
                "baseIndent": 1,        // 根元素缩进1级
                "closeBracket": 0,      // 闭合标签不缩进
                "alignAttributesVertically": false // 垂直对齐属性
            }],
			'vue/script-indent': ['error', 4, {
                "baseIndent": 1,        // 脚本根级缩进
                "switchCase": 1,        // switch case缩进
                "ignores": []           // 不忽略任何情况
            }],
            'unused-imports/no-unused-vars': 'error', // 禁止未使用变量
            'curly': ['error', 'all'], // 强制所有控制语句使用大括号
            'ts/no-unused-expressions': ['error', { // 禁止未使用的表达式
                'allowShortCircuit': true, // 允许短路表达式
                'allowTernary': true, // 允许三元运算符
            }],
        },
    },
    {
        files: [
            '/src/**/*.vue',
            '/src/**/*.ts',
        ],
        rules: {
            'vue/block-order': ['error', {
                order: ['route', 'i18n', 'script', 'template', 'style'],
            }],
        },
    },
)
