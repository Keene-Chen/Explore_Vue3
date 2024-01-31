import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/layout/BaseLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/HomeView.vue'),
        },
      ],
    },
    {
      path: '/lucide',
      name: 'lucide',
      component: () => import('@/views/LucideIconView.vue'),
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/error/404View.vue'),
    },
  ],
});

export default router;
