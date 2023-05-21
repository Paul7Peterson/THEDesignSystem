/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
  ],
  globals: {
    defineOptions: 'writable',
    VueGen: 'readonly',
  },
  overrides: [
    {
      files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended'],
    },
  ],
  // parser: 'vue-eslint-parser',
  parserOptions: {
    //   parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    //   sourceType: 'module',
    //   vueFeatures: {},
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // TypesScript
    'no-async-promise-executor': 'off',
    '@typescript-eslint/prefer-literal-enum-member': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn', // or "error"
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'no-extra-boolean-cast': ['off', { enforceForLogicalOperands: true }],
    'no-trailing-spaces': ['error', {
      ignoreComments: true,
    }],
    'quote-props': ['error', 'as-needed'],
    semi: [2, 'always'],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-delete-var': 'error',
    'no-var': 'error',
    'no-unused-vars': 'off',
    // VUE
    'vue/no-unused-vars': ['error', {
      ignorePattern: '^_',
    }],
    'vue/multi-word-component-names': 'off',
    'vue/script-indent': ['error', 2, {
      baseIndent: 1,
    }],
    // 'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: true,
      ignores: [],
    }],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/component-tags-order': ['error', {
      order: [['script', 'template'], 'style'],
    }],
    'vue/block-lang': ['error',
      {
        script: { lang: 'ts' },
        style: { lang: 'scss' },
      },
    ],
    'vue/attribute-hyphenation': ['warn', 'always'],
    'vue/max-attributes-per-line': ['warn', {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/no-deprecated-slot-attribute': 'off',
  },
};
