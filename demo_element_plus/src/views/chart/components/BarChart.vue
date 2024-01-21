<script lang="ts" setup>
import { loadingOptions, options } from '@chart/options/barChartOption';
import { BarChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import Mock from 'mockjs';
import { provide, ref, shallowRef } from 'vue';
import VChart, { THEME_KEY } from 'vue-echarts';

use([GridComponent, BarChart, CanvasRenderer]);
provide(THEME_KEY, 'light');

const barChart = ref();
const loading = ref(true);
const option = shallowRef(options);

const getData = async () => {
  try {
    const newData = await fetchData();
    option.value.series[0].data = newData;
    barChart.value?.setOption(option.value);
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

async function fetchData() {
  // Simulate API call delay await new Promise(resolve => setTimeout(resolve, 1000));

  const data2 = option.value.series[0].data.map(() => {
    return Mock.mock('@integer(100, 1000)');
  });

  console.log(option.value);
  console.log(data2);

  return data2;
}
</script>

<template>
  <el-card :body-style="{ padding: '2px' }">
    <v-chart class="chart" ref="barChart" autoresize :option="option" :loading="loading" :loading-options="loadingOptions"/>
    <el-button @click="getData">获取数据</el-button>
  </el-card>
</template>

<style scoped>
.chart {
  width: 600px;
  height: 400px;
}
</style>
