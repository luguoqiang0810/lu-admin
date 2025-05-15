/*
 * @Author: lgq
 * @Date: 2025-05-08 18:19:29
 * @LastEditors: lgq
 * @LastEditTime: 2025-05-13 13:57:04
 * @Description: file content
 * @FilePath: \lu-admin\stylelint.config.js
 */
export default {
	extends: [
		'stylelint-config-standard-scss', // scss 标准配置
		'stylelint-config-standard-vue/scss', // scss 推荐规则
		'stylelint-config-recess-order', // 属性顺序
		'@stylistic/stylelint-config', // 代码风格
	],
	plugins: [
		'stylelint-scss', // scss 语法支持
	],
	rules: {
		'@stylistic/indentation': 4,  // 4 空格缩进规则
		'at-rule-no-unknown': null, // 允许使用未知 @ 规则（如 Less 的 @color）
		'no-descending-specificity': null, // 允许选择器特异性递减
		'property-no-unknown': null, // 允许未知 CSS 属性（配合预处理器使用）
		'font-family-no-missing-generic-family-keyword': null,// 允许字体族缺少通用名称
		'selector-class-pattern': null, // 禁用类选择器命名规范检查
		'scss/double-slash-comment-empty-line-before': 'always', // 双斜杠注释前需空行
		'scss/no-global-function-names': null, // 允许 Less 全局函数
		'@stylistic/max-line-length': null,  // 禁用行长度限制
		'@stylistic/block-closing-brace-newline-after': [ // 右花括号后必须换行
			'always',
			{
				ignoreAtRules: ['if', 'else'], // 忽略 @if/@else 条件语句
			},
		]
	},
	allowEmptyInput: true,
	ignoreFiles: [
		'node_modules/**/*',
		'dist*/**/*',
	],
}
