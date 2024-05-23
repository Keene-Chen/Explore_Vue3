<script lang="ts" setup>
import videoSource from '@/assets/videoSource.json'
import Artplayer from 'artplayer'
import type { Option } from 'artplayer/types/option'
import Hls from 'hls.js'
import { onMounted, onUnmounted, ref } from 'vue'

const artRef = ref<HTMLDivElement | null>(null)
let art: Artplayer
const videoUrl = videoSource.video.filter(videoItem => videoItem.type === 'm3u8').map(videoItem => videoItem.url)

const playM3u8 = (video, url, art) => {
  if (Hls.isSupported()) {
    if (art.hls)
      art.hls.destroy()
    const hls = new Hls()
    hls.loadSource(url)
    hls.attachMedia(video)
    art.hls = hls
    art.on('destroy', () => hls.destroy())
  }
  else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = url
  }
  else {
    art.notice.show = 'Unsupported playback format: m3u8'
  }
}

const initPlayer = () => {
  const option: Option = {
    container: artRef.value!,
    url: videoUrl[1],
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
      state: `<img src="${videoSource.playerIcons[1].url}">`,
      indicator: `<img src="${videoSource.playerIcons[2].url}">`,
    },
    type: 'm3u8',
    customType: {
      m3u8: playM3u8,
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
