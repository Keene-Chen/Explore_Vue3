import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@components/Hello.vue'),
  },
  {
    path: '/chart',
    // component: () => import('@views/chart/ChartView.vue'),
    children: [
      {
        path: 'line',
        component: () => import('@views/chart/components/LineChart.vue'),
      },
      {
        path: 'bar',
        component: () => import('@views/chart/components/BarChart.vue'),
      },
      {
        path: 'pie',
        component: () => import('@views/chart/components/PieChart.vue'),
      },
      {
        path: 'radar',
        component: () => import('@views/chart/components/RadarChart.vue'),
      },
    ],
  },
  {
    path: '/test',
    component: () => import('@views/test/TestView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
