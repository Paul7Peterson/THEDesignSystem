import type { Plugin } from 'vue';
import './types/vue.types';
import { userLitDirectives } from './directives';

export const useLitForVue: Plugin = {
  install: (app) => {
    // Plugin code goes here
    userLitDirectives(app);
  },
};