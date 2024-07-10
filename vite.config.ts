import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  css: {
    postcss: './postcss.config.js'
  },
  build: {
    outDir: '../../go/src/personal-resume/public',
    emptyOutDir: true,
    sourcemap: false, // 关闭 sourcemap
    minify: 'terser', // 使用 terser 进行代码压缩
    terserOptions: {
      compress: {
        drop_console: true, // 去除 console 语句
        drop_debugger: true, // 去除 debugger 语句
      },
      format: {
        comments: false, // 移除注释
      },
      mangle: {
        toplevel: true, // 混淆顶级作用域变量
      },
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
