import { App } from 'vue';

import { litModelDirective } from './model';

export function userLitDirectives (app: App<Element>) {
  app.directive('lit-model', litModelDirective);
}