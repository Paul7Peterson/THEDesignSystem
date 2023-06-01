import './components';
import { userLitDirectives } from './directives';

export type { VueComponents } from './types/vue.types';

/** ## `useLitForVue()`
 * 
 */
export const useLitForVue: import('vue').Plugin = {
  install: (app) => {
    userLitDirectives(app);
  },
};

