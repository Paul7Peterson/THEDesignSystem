/// <reference types="vitest" />

import * as path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const COMPONENTS = {
  atoms: [
    'currency',
    'date',
    'image',
    'icon',
    'number',
    'spinner',
    'tooltip',
  ],
  layouts: [
    'card',
    'modal',
  ],
  molecules: [
    'button',
    'checkbox',
    'chip',
    'label',
    'number-input',
    'output',
    'select',
    'switch',
    'text-input',
  ],
} as const;

function chuckParser (): Record<string, string> {
  return Object.entries(COMPONENTS).reduce((t, [cat, elements]) => {
    elements.forEach((element) => {
      t[`components/${element}`] = path.resolve(__dirname, `src/components/${cat}/z-${element}.ts`);
    });
    return t;
  }, {} as Record<string, string>);
}

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
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'main.css') return 'styles.css';
          return assetInfo.name || '';
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
    commonjsOptions: {

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
    reporters: [
      'verbose',
      'junit',
    ],
    outputFile: './junit.xml',
  },
});
