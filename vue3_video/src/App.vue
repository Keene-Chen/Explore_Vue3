<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const MpegtsjsVideo = defineAsyncComponent(() => import('./components/MpegtsjsVideo.vue'));
const DplayerVideo = defineAsyncComponent(() => import('./components/DplayerVideo.vue'));
const ArtplayerVideo = defineAsyncComponent(() => import('./components/ArtPlayerVideo.vue'));
</script>

<template>
  <div class="demo-video">
    <div class="item"><MpegtsjsVideo /></div>
    <div class="item"><MpegtsjsVideo /></div>
    <div class="item"><MpegtsjsVideo /></div>
    <div class="item"><DplayerVideo /></div>
    <div class="item"><DplayerVideo /></div>
    <div class="item"><DplayerVideo /></div>
    <div class="item"><ArtplayerVideo /></div>
    <div class="item"><ArtplayerVideo /></div>
    <div class="item"><ArtplayerVideo /></div>
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
  border: 1px solid #865b5b;
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
