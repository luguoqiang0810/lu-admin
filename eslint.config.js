/*
 * @Author: lgq
 * @Date: 2025-05-20 16:06:17
 * @LastEditors: lgq
 * @LastEditTime: 2025-06-03 17:12:08
 * @Description: file content
 * @FilePath: \lu-admin\eslint.config.js
 */
import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,

  prettier: {
    // printWidth: 120,
    tabWidth: 2,
    singleQuote: true,
    semi: false,
    trailingComma: 'none',
    htmlWhitespaceSensitivity: 'ignore' // 新增HTML空白敏感度配置
  },
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: false,
    arrowParens: 'avoid',
    vueIndentScriptAndStyle: true // 新增Vue模板缩进配置
  },

  // Disable jsonc and yaml support
  jsonc: false,
  yaml: false,

  formatters: {
    css: true,
    html: true,
    markdown: true,
  },
  ignores: [
    '**/*.md',
    '**/*.json',
    'dist',
    'public',
    'node_modules',
    'auxiliaryTool',
    'vite.config.ts',
  ],
  {
    rules: {
      'eslint-comments/no-unlimited-disable': 'off',
      'curly': ['error', 'all'],
      'ts/no-unused-expressions': ['error', {
        allowShortCircuit: true,
        allowTernary: true,
      }],
    },
  },
  {
    files: [
      'src/**/*.vue',
    ],
    rules: {
      'vue/block-order': ['error', {
        order: ['route', 'i18n', 'script', 'template', 'style'],
      }],
    },
  },
})
