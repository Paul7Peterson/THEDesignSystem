// import type { App } from 'vue';

import { litModelDirective, litEventDirective } from './model';

/** */
export function userLitDirectives (app: import('vue').App<Element>) {
  app.directive('lit-model', litModelDirective);
  app.directive('lit-event', litEventDirective);
}