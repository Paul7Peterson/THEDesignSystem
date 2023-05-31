import './components';
import type { VueComponents } from './types/vue.types';
export type { VueComponents } from './types/vue.types';

declare module '@vue/runtime-core' {
  interface GlobalComponents extends VueComponents { }
}
