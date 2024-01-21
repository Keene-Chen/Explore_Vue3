/**
 * @file barChartOption.ts
 * @desc barChartOption
 * @author KeeneChen <keenechen@qq.com>
 * @since  2024.01.21-10:48:36
 */

const options = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {},
  series: [
    {
      type: 'bar',
      data: [120, 200, 150, 80, 70, 110, 130],
    },
  ],
};

const loadingOptions = {
  text: '加载中...',
  color: '#c23531',
  textColor: '#000',
  maskColor: 'rgba(255, 255, 255, 0.8)',
  zlevel: 0,

  // 字体大小。从 `v4.8.0` 开始支持。
  fontSize: 16,
  // 是否显示旋转动画（spinner）。从 `v4.8.0` 开始支持。
  showSpinner: true,
  // 旋转动画（spinner）的半径。从 `v4.8.0` 开始支持。
  spinnerRadius: 10,
  // 旋转动画（spinner）的线宽。从 `v4.8.0` 开始支持。
  lineWidth: 5,
  // 字体粗细。从 `v5.0.1` 开始支持。
  fontWeight: 'bold',
  // 字体风格。从 `v5.0.1` 开始支持。
  fontStyle: 'italic',
  // 字体系列。从 `v5.0.1` 开始支持。
  fontFamily: 'sans-serif',
};

export { loadingOptions, options };

