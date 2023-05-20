import type { Plugin } from 'vue';
import './types/vue.types';
import { userLitDirectives } from './directives';

export * from './components';

export const useLitUI: Plugin = {
  install: (app) => {
    // Plugin code goes here
    userLitDirectives(app);
  },
};