import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import { useLitUI } from '../dist/lit/vue';

createApp(App)
  .use(useLitUI)
  .mount('#app');
