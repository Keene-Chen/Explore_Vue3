import Mock from 'mockjs';
import { defineMock } from 'vite-plugin-mock-dev-server';

export default defineMock({
  url: '/mock/chart/test',
  enabled: true,
  status: 200,
  statusText: 'OK',
  delay: 1000,
  body: Mock.mock({
    'list|1-10': [
      {
        'id|+1': 1,
      },
    ],
  }),
});
