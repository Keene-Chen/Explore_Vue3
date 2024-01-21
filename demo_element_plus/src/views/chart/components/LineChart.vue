<script lang="ts" setup>
import { loadingOptions, options } from '@chart/options/lineChartOption';
import { LineChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { ref, shallowRef } from 'vue';
import VChart from 'vue-echarts';

use([GridComponent, LineChart, CanvasRenderer]);

const lineChart = ref();
const loading = ref(true);
const option = shallowRef(options);

const getData = async () => {
  const res = await fetch('http://localhost:8888/mock/chart/line/test').then(res => res.json());
  console.log(res);

  option.value = res;
  loading.value = false;
};
</script>

<template>
  <el-card :body-style="{ padding: '2px' }">
    <v-chart
      class="chart"
      ref="lineChart"
      autoresize
      :option="option"
      :loading="loading"
      :loading-options="loadingOptions"
    />
    <el-button @click="getData">获取数据</el-button>
  </el-card>
</template>

<style scoped>
.chart {
  width: 600px;
  height: 400px;
}
</style>
