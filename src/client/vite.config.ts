import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  root: fileURLToPath(new URL('./', import.meta.url)),
  build: {
    manifest: true,
    outDir: fileURLToPath(new URL('../../dist/client', import.meta.url)),
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        'index': fileURLToPath(new URL('./index.html', import.meta.url))
      }
    }
  }
});
