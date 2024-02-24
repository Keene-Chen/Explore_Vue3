<script lang="ts" setup>
import videoSource from '@/assets/videoSource.json';
import Artplayer from 'artplayer';
import type { Option } from 'artplayer/types/option';
import { onMounted, onUnmounted, ref } from 'vue';

const artRef = ref<HTMLDivElement | null>(null);
let art: Artplayer;

const initPlayer = () => {
  const option: Option = {
    container: artRef.value!,
    url: videoSource.video[3].url,
    isLive: true,
    mutex: false,
    autoSize: false,
    autoplay: true,
    screenshot: true,
    theme: '#57AFEF',
    fullscreen: true,
    fullscreenWeb: true,
    hotkey: true,
    miniProgressBar: true,
    moreVideoAttr: {
      crossOrigin: 'anonymous',
    },
    autoPlayback: true,
    icons: {
      loading: `<img src="${videoSource.playerIcons[0].url}">`,
      state: `<img src="${videoSource.playerIcons[1].url}">`,
      indicator: `<img src="${videoSource.playerIcons[2].url}">`,
    },
  };

  art = new Artplayer(option);
};

onMounted(() => {
  initPlayer();
});

onUnmounted(() => {
  if (art) {
    art.destroy();
  }
});
</script>

<template>
  <div ref="artRef" class="container-wrap"></div>
</template>

<style scoped>
.container-wrap {
  width: 100%;
  height: 100%;
}
</style>
