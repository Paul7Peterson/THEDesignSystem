/// <reference types="vitest" />

import * as path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import { ignoreCustomTags } from '@local/lit/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({}),
  ],
  build: {
    chunkSizeWarningLimit: 1_000,
  },
  server: {
    port: 8081,
  },
  define: {
    'process.env': process.env,
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    watch: false,
    reporters: [
      'verbose',
      'junit',
    ],
    outputFile: './junit.xml',
  },
});
