<script lang="ts" setup>
import videoSource from '@/assets/videoSource.json'
import Artplayer from 'artplayer'
import type { Option } from 'artplayer/types/option'
import mpegts from 'mpegts.js'
import { onMounted, onUnmounted, ref } from 'vue'

const artRef = ref<HTMLDivElement | null>(null)
let art: Artplayer
const videoUrl = videoSource.video.filter(videoItem => videoItem.type === 'flv').map(videoItem => videoItem.url)

const playFlv = (video: HTMLVideoElement, url: string, art: Artplayer) => {
  if (mpegts.isSupported()) {
    if (art.flv)
      art.flv.destroy()
    const flv = mpegts.createPlayer({ type: 'flv', url })
    flv.attachMediaElement(video)
    flv.load()
    art.flv = flv
    art.on('destroy', () => flv.destroy())
  }
  else {
    art.notice.show = 'Unsupported playback format: flv'
  }
}

const initPlayer = () => {
  const option: Option = {
    container: artRef.value!,
    url: videoUrl[0],
    isLive: false,
    mutex: false,
    autoSize: false,
    autoplay: false,
    screenshot: false,
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
      state: `<img src="https://artplayer.org/assets/img/state.svg">`,
      indicator: `<img src="${videoSource.playerIcons[2].url}">`,
    },
    type: 'flv',
    customType: {
      flv: playFlv,
    },
  }

  art = new Artplayer(option)

  art.on('ready', () => {
    console.info(art.hls)
  })
}

onMounted(() => {
  initPlayer()
})

onUnmounted(() => {
  if (art)
    art.destroy()
})
</script>

<template>
  <div ref="artRef" class="container-wrap" />
</template>

<style scoped>
.container-wrap {
  width: 100%;
  height: 100%;
}
</style>
