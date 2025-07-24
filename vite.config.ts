/*
 * @Author: lgq
 * @Date: 2025-04-24 15:29:22
 * @LastEditors: guoqiang.lu guoqiang.lu@percent.cn
 * @LastEditTime: 2025-07-23 10:47:14
 * @Description: file content
 * @FilePath: \lu-admin\vite.config.ts
 */
import { fileURLToPath } from "node:url";
import vue from "@vitejs/plugin-vue";
import { VueHooksPlusResolver } from "@vue-hooks-plus/resolvers";
import AutoImport from "unplugin-auto-import/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import { createHtmlPlugin } from "vite-plugin-html";
import { lazyImport, VxeResolver } from "vite-plugin-lazy-import";
import { compression } from "vite-plugin-compression2";
import postcssNesting from "postcss-nesting";
import Config from "./src/config/app";

const baseSrc = fileURLToPath(new URL("./src", import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    /**
     * vite-plugin-checker 是一个用于在 Vite 开发服务器中进行类型检查和 ESLint 检查的插件。
     * 它可以帮助开发者在开发过程中及时发现并修复代码中的错误，提高开发效率。
     */
    checker({
      typescript: true,
      vueTsc: true,
    }),
    // 优化构建输出
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: "", // Config.systemName,
        },
      },
      entry: "/src/main.ts",
    }),
    // 按需加载组件
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
      dts: "types/components.d.ts", // 生成类型声明文件
    }),
    lazyImport({
      resolvers: [
        VxeResolver({
          libraryName: "vxe-table",
        }),
      ],
    }),
    // 自动导入
    AutoImport({
      imports: ["vue", "vue-router", "vue-i18n", '@vueuse/core', "pinia"],
      dts: "types/auto-imports.d.ts", // 生成类型声明文件
      dirs: ["src/plugins/pinia/modules", "src/hooks"],
      resolvers: [VueHooksPlusResolver()],
    }),
    // 压缩
    compression(),
    compression({
      exclude: [/\.(br)$/, /\.(gz)$/],
      algorithm: "brotliCompress",
    }),
  ],
  css: {
    postcss: {
      plugins: [postcssNesting()],
    },
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: baseSrc,
      },
    ],
  },
  build: {
    chunkSizeWarningLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ["vue", "vue-router", "pinia", "vue-i18n"],
          antd: ["ant-design-vue", "@ant-design/icons-vue"],
        },
      },
      external: [fileURLToPath(new URL("./auxiliaryTool", import.meta.url))],
    },
  },
});
