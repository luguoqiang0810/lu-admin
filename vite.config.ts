/*
 * @Author: lgq
 * @Date: 2024-07-08 16:53:41
 * @LastEditors: lgq
 * @LastEditTime: 2024-11-01 16:06:21
 * @Description: file content
 * @FilePath: \lu-admin\vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { lazyImport, VxeResolver } from 'vite-plugin-lazy-import'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    lazyImport({
      resolvers: [VxeResolver({ libraryName: 'vxe-table' }), VxeResolver({ libraryName: 'vxe-pc-ui' })]
    }),
    Components({
      resolvers: [AntDesignVueResolver({ importStyle: false })]
    }),
    vue()
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src')
      }
    ]
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://cn.bing.com',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(new RegExp(`^/api`), '')
      },
      '/mtc': {
        target: 'https://saas.pdeepmatrix.com/gateway/mtc',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(new RegExp(`^/mtc`), '')
      }
    }
  }
})
