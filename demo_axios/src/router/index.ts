/**
 * @file index.ts
 * @desc index
 * @author KeeneChen <keenechen@qq.com>
 * @since  2024.03.26-23:20:21
 */

import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/IndexView.vue'),
  },
  {
    path: '/event_bus',
    name: 'EventBus',
    children: [
      {
        path: 'emit',
        name: 'Emit',
        component: () => import('@/views/test/Test.vue'),
      },
      {
        path: 'on',
        name: 'On',
        component: () => import('@/views/test/Test.vue'),
      },
      {
        path: 'once',
        name: 'Once',
        component: () => import('@/views/test/Test.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
