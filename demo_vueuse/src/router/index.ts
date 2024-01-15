import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@views/Home.vue'),
  },
  {
    path: '/event_bus',
    name: 'EventBus',
    children: [
      {
        path: 'emit',
        name: 'Emit',
        component: () => import('@views/event_bus/Emit.vue'),
      },
      {
        path: 'on',
        name: 'On',
        component: () => import('@views/event_bus/On.vue'),
      },
      {
        path: 'once',
        name: 'Once',
        component: () => import('@views/event_bus/Once.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
