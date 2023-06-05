import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';

import { useLitForVue, type VueComponents } from '@local/lit/vue';

declare module '@vue/runtime-core' { // TODO why not imported?
  interface GlobalComponents extends VueComponents { }
}

createApp(App)
  .use(useLitForVue)
  .mount('#app');
