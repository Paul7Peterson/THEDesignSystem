import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import { useLitForVue } from '@local/lit/vue';
import '@local/lit';

createApp(App)
  .use(useLitForVue)
  .mount('#app');
