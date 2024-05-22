import { createRouter, createWebHistory } from 'vue-router';

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
    path: '/cropper',
    component: () => import('@/views/cropper/Index.vue'),
  },
  {
    path: '/404',
    component: () => import('@/views/error/404View.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
