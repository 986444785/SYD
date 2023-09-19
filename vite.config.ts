import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// 需要在vite.config里面进行配置
import * as path from "path"; // 需要npm i @type/node 才可以使用

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  
    //添加elementUI按需导入插件
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  
  
  ],
  // 配置路径别名, 还需要再tsconfi里加上
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  
})
