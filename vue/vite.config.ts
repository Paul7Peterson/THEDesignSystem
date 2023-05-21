/// <reference types="vitest" />

import * as path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import { ignoreCustomTags } from '@local/lit';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag: string) => tag.endsWith('-lit') || tag.startsWith('z-'),
        },
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 1_000,
  },
  server: {
    port: 8080,
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
