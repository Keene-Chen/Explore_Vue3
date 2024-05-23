import vue from '@vitejs/plugin-vue'
import { URL, fileURLToPath } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        // 'vue-i18n',
        // 'pinia',
        // '@vueuse/core',
        {
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
        },
      ],
      dts: 'types/auto-import.d.ts', // 生成自动导入的类型定义文件
    }),
    Components({
      resolvers: [
        NaiveUiResolver(), // 解析 Naive Ui 组件
      ],
      dts: 'types/components.d.ts', // 生成组件的类型定义文件
    }),
  ],
  server: {
    host: '0.0.0.0',
    cors: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
