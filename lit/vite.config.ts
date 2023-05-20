/// <reference types="vitest" />

import * as path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import typescript2 from 'rollup-plugin-typescript2';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
    typescript2({
      check: false,
      include: ['src/elements/**/*.vue'],
      tsconfigOverride: {
        compilerOptions: {
          outDir: 'dist',
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
      },
      exclude: ['vite.config.ts'],
    }),
  ],
  build: {
    // minify: false,
    emptyOutDir: true,
    // sourcemap: true,
    // cssCodeSplit: true,
    outDir: path.resolve(__dirname, 'dist'),
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'THEDesignSystem',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [],
      input: {
        main: path.resolve(__dirname, 'src/index.ts'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'main.css') return 'styles.css';
          return assetInfo.name || '';
        },
        exports: 'named',
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
