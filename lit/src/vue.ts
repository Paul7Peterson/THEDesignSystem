import './types/vue.types';
import { userLitDirectives } from './directives';

/** ## `useLitForVue()`
 * 
 */
export const useLitForVue: import('vue').Plugin = {
  install: (app) => {
    userLitDirectives(app);
  },
};