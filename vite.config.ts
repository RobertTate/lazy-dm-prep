import { resolve } from 'path';
import { defineConfig } from 'vite'

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        'assets/index': resolve(__dirname, 'index.html'),
        'service-worker': resolve(__dirname, 'service-worker.ts')
      },
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    }
  }
});
