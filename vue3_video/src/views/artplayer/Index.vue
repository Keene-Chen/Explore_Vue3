<script lang="ts" setup>
import { NBadge, NGi, NGrid, NSpace } from 'naive-ui';
import BaseVideo from './components/BaseVideo.vue';
import LiveVideo from './components/LiveVideo.vue';
import Video2 from './components/Video2.vue';
import Video3 from './components/Video3.vue';
</script>

<template>
  <n-space vertical size="large">
    <n-grid x-gap="0" y-gap="0" :cols="3">
      <n-gi class="warp">
        <n-badge value="新sadasdsadada" />
        <base-video />
      </n-gi>
      <n-gi class="warp">
        <video2 />
      </n-gi>
      <n-gi class="warp">
        <video3 />
      </n-gi>
      <n-gi class="warp">
        <live-video />
      </n-gi>
      <n-gi class="warp"> </n-gi>
      <n-gi class="warp"> </n-gi>
      <n-gi class="warp"> </n-gi>
      <n-gi class="warp"> </n-gi>
      <n-gi class="warp"> </n-gi>
      <n-gi class="warp"> </n-gi>
    </n-grid>
  </n-space>
</template>

<style scoped>
.n-badge{
  position: absolute;
  z-index: 9999;
}
.warp {
  height: calc(100vh / 3);
  border: 1px dashed #cccccc5d;
  background-color: #000;
  overflow: hidden;
}
.warp:nth-child(4),
.warp:nth-child(5),
.warp:nth-child(6),
.warp:nth-child(10),
.warp:nth-child(11),
.warp:nth-child(12) {
  border-top: none;
  border-bottom: none;
}
.warp:nth-child(3n + 2) {
  border-left: none;
  border-right: none;
}
</style>
