import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/views/home/Index.vue'),
  },
  {
    path: '/artplayer',
    component: () => import('@/views/artplayer/Index.vue'),
  },
  {
    path: '/dplayer',
    component: () => import('@/views/dplayer/Index.vue'),
  },
  {
    path: '/404',
    component: () => import('@/views/error/404View.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
