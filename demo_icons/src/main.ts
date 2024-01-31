/**
 * @file main.ts
 * @desc main
 * @author KeeneChen <keenechen@qq.com>
 * @since  2024.01.30-17:17:40
 */

import '@/assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import naive from 'naive-ui';

const app = createApp(App);

app.use(router);
app.use(naive);

app.mount('#app');
