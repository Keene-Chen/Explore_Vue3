<script lang="ts" setup>
import { NBadge, NGi, NGrid, NSpace } from 'naive-ui'
import { BaseVideo, BaseVideo2, Flv, LiveVideo, M3U8, Video2, Video3, VideoTheme } from './components/videoCompnent'

// 定义组件数组
const components = [
  { id: 1, name: 'BaseVideo', component: BaseVideo },
  { id: 2, name: 'BaseVideo2', component: BaseVideo2 },
  { id: 3, name: 'Flv', component: Flv },
  { id: 4, name: 'LiveVideo', component: LiveVideo },
  { id: 5, name: 'M3U8', component: M3U8 },
  { id: 6, name: 'Video2', component: Video2 },
  { id: 7, name: 'Video3', component: Video3 },
  { id: 8, name: 'VideoTheme', component: VideoTheme },
  { id: 9, name: 'VideoTheme', component: VideoTheme },
  { id: 10, name: 'VideoTheme', component: VideoTheme },
  { id: 11, name: 'VideoTheme', component: VideoTheme },
]
</script>

<template>
  <n-space vertical size="large">
    <n-grid x-gap="0" y-gap="0" :cols="3">
      <template v-for="item in components" :key="item.id">
        <n-gi class="warp">
          <n-badge :value="item.name" type="info" />
          <component :is="item.component" />
        </n-gi>
      </template>
    </n-grid>
  </n-space>
</template>

<style scoped>
.n-badge {
  position: absolute;
  z-index: 99;
}
:deep(.n-badge-sup) {
  border-radius: 0px;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 4px;
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
