<template>
  <v-chart class="chart" ref="barChart" autoresize :option="option" :loading="loading" />
  <el-button @click="getData">获取数据</el-button>
</template>

<script lang="ts" setup>
import { PieChart } from 'echarts/charts';
import { LegendComponent, TitleComponent, ToolboxComponent, TooltipComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import Mock from 'mockjs';
import { provide, ref, shallowRef } from 'vue';
import VChart, { THEME_KEY } from 'vue-echarts';

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent, ToolboxComponent]);

provide(THEME_KEY, 'light');

const barChart = ref();
const loading = ref(true);
const option = shallowRef({
  title: {
    text: 'Traffic Sources',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: 'none',
      },
      dataView: {
        readOnly: false,
      },
      magicType: {
        type: ['line', 'bar'],
      },
      restore: {},
      saveAsImage: {},
    },
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
  },
  series: [
    {
      name: 'Traffic Sources',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: 'Direct' },
        { value: 310, name: 'Email' },
        { value: 234, name: 'Ad Networks' },
        { value: 135, name: 'Video Ads' },
        { value: 1548, name: 'Search Engines' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
});

let count = 0;

const getData = () => {
  loading.value = false;
  const {
    legend: { data: data1 },
    series: [{ data: data2 }],
  } = option.value;
  console.log(data1, data2);
  count += 1;
  data1.push(`test${count}`);
  data2.push({
    value: Mock.mock('@natural(10, 100)'),
    name: `test${count}`,
  });
  data1.shift();
  data2.shift();

  barChart.value?.setOption(option.value);
};
</script>

<style scoped>
.chart {
  width: 600px;
  height: 400px;
}
</style>
