import IndexView from '@/layouts/IndexView.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      meta: {
        layout: IndexView,
        title: '首页',
      },
      component: IndexView,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/icons/lucide/IndexView.vue'),
        },
        {
          path: '/lucide',
          name: 'lucide',
          component: () => import('@/views/icons/lucide/LucideIconView.vue'),
        },
      ],
    },
    {
      path: '/404',
      name: '404',
      meta: {
        layout: '404',
        title: '404',
      },
      component: () => import('@/views/error/404View.vue'),
    },
  ],
});

export default router;
