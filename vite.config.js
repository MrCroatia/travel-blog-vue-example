import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import vercelAdapter from './vercel.js'

export default defineConfig({
  plugins: [vue(), vercelAdapter()],
  base: '/', // Use root-relative paths
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // Ensure assets have the correct MIME types
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Ensure proper file naming to avoid MIME type issues
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        manualChunks: {
          vendor: ['vue', 'vue-router', 'vuex'],
        },
      },
    },
  },
})
