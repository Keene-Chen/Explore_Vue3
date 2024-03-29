import router from '@/router/index';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount('#app');
