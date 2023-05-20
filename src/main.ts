import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import { useLitForVue } from '@local/lit';

createApp(App)
  .use(useLitForVue)
  .mount('#app');
