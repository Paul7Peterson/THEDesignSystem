import './types/vue.types';
import { userLitDirectives } from './directives';
import type { VueComponents } from './types/vue.types';

export type { VueComponents } from './types/vue.types';

/** ## `useLitForVue()`
 * 
 */
export const useLitForVue: import('vue').Plugin = {
  install: (app) => {
    userLitDirectives(app);
  },
};

declare module '@vue/runtime-core' {
  interface GlobalComponents extends VueComponents { }
}
