import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@views/Home.vue'),
  },
  {
    path: '/amap',
    name: 'AMap',
    component: () => import('@views/AMapView.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
