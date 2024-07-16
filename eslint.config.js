/*
 * @Author: lgq
 * @Date: 2024-07-10 09:59:53
 * @LastEditors: lgq
 * @LastEditTime: 2024-07-10 10:14:21
 * @Description: file content
 * @FilePath: \lu-admin\eslint.config.js
 */
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"]
  },
  {
    languageOptions: { 
      globals: globals.browser 
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    ignores: [
      "config/*",
      ".husky",
      ".local",
      "public/*",
      ".vscode",
      "node_modules"
   ]
  }
];