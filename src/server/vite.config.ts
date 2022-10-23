import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src/server', import.meta.url))
    }
  },
  root: fileURLToPath(new URL('./', import.meta.url)),
  build: {
    manifest: true,
    outDir: fileURLToPath(new URL('../../dist/server', import.meta.url)),
    assetsDir: './',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        'index': fileURLToPath(new URL('./index.ts', import.meta.url))
      }
    }
  }
});
