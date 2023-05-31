/// <reference types="vitest" />

import * as path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { chuckParser } from './vite.helpers';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    minify: true,
    cssMinify: true,
    emptyOutDir: true,
    sourcemap: 'hidden',
    cssCodeSplit: true,
    outDir: path.resolve(__dirname, 'dist'),
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'THEDesignSystem',
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: [
        /^lit/,
        'vue',
      ],
      input: {
        index: path.resolve(__dirname, 'src/index.ts'),
        vue: path.resolve(__dirname, 'src/vue.ts'),
        vite: path.resolve(__dirname, 'src/vite.ts'),
        'components/test-lit': path.resolve(__dirname, 'src/components/test-lit.ts'),
        ...chuckParser(),
      },
      output: {
        // manualChunks: {
        //   vendor: ['vue'],
        // },
        assetFileNames (assetInfo) {
          if (assetInfo.name === 'main.css') return 'styles.css';
          return assetInfo.name || '';
        },
        chunkFileNames (fileInfo) {
          return fileInfo.name || '';
        },
        exports: 'auto',
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          // vue: 'Vue',
          // 'vue-i18n': 'vueI18n',
          // 'vue-router': 'vueRouter',
        },
      },
    },
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
    environment: 'jsdom',
    reporters: [
      'verbose',
      'junit',
    ],
    outputFile: './junit.xml',
  },
});
