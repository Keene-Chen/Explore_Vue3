<script lang="ts" setup>
import { DplayerVideo, LiveVideo, MpegtsjsVideo } from './components/videoCompnent';

const videoCompnents = [
  {
    name: 'MpegtsjsVideo',
    component: MpegtsjsVideo,
  },
  {
    name: 'MpegtsjsVideo',
    component: MpegtsjsVideo,
  },
  {
    name: 'MpegtsjsVideo',
    component: MpegtsjsVideo,
  },
  {
    name: 'DplayerVideo',
    component: DplayerVideo,
  },
  {
    name: 'LiveVideo',
    component: LiveVideo,
  },
  {
    name: 'DplayerVideo',
    component: DplayerVideo,
  },
  {
    name: 'DplayerVideo',
    component: DplayerVideo,
  },
  {
    name: 'DplayerVideo',
    component: DplayerVideo,
  },
  {
    name: 'DplayerVideo',
    component: DplayerVideo,
  },
];
</script>

<template>
  <div class="demo-video">
    <template v-for="item in videoCompnents" :key="item.name">
      <div class="item">
        <component :is="item.component" />
      </div>
    </template>
  </div>
</template>

<style scoped>
.demo-video {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.item {
  width: calc(100% / 3);
  height: calc(100% / 3);
  background-color: #000;
  box-sizing: border-box;
  border: 1px dashed #865b5b;
}

.item:nth-child(4),
.item:nth-child(5),
.item:nth-child(6) {
  border-top: none;
  border-bottom: none;
}
.item:nth-child(3n + 2) {
  border-left: none;
  border-right: none;
}
</style>
