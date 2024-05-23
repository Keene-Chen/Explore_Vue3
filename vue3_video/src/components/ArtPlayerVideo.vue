<script lang="ts" setup>
import Artplayer from 'artplayer'
import type { Option } from 'artplayer/types/option'
import { onMounted, ref } from 'vue'

const artRef = ref()
let art: Artplayer

const option: Option = {
  container: artRef.value as HTMLDivElement,
  url: 'https://artplayer.org/assets/sample/video.mp4',
  mutex: false,
  autoSize: false,
  autoplay: true,
  screenshot: true,
}

const initPlayer = () => {
  art = new Artplayer({
    container: artRef.value as HTMLDivElement,
    url: 'https://prod-streaming-video-msn-com.akamaized.net/9752d732-2354-483f-a678-a6d0cd2c22b7/1a5ed13a-43f5-4e85-95c8-6579065c4d7c.mp4',
    mutex: false,
    autoSize: false,
    autoplay: true,
    screenshot: true,
    theme: '#57AFEF',
    fullscreen: true,
    fullscreenWeb: true,

    setting: true,
    flip: true,
    playbackRate: true,
    aspectRatio: true,
    subtitleOffset: true,

    settings: [
      {
        html: 'Subtitle',
        width: 250,
        tooltip: 'Subtitle 01',
        selector: [
          {
            default: true,
            html: '<span style="color:red">Subtitle 01</span>',
            url: '/assets/sample/subtitle.srt?id=1',
          },
          {
            html: '<span style="color:yellow">Subtitle 02</span>',
            url: '/assets/sample/subtitle.srt?id=2',
          },
        ],
        onSelect(item, $dom, event) {
          console.info(item, $dom, event)
          art.subtitle.url = item.url
          return item.html
        },
      },
      {
        html: 'Quality',
        width: 150,
        tooltip: '1080P',
        selector: [
          {
            default: true,
            html: '1080P',
            url: '/assets/sample/video.mp4?id=1080',
          },
          {
            html: '720P',
            url: '/assets/sample/video.mp4?id=720',
          },
          {
            html: '360P',
            url: '/assets/sample/video.mp4?id=360',
          },
        ],
        onSelect(item, $dom, event) {
          console.info(item, $dom, event)
          art.switchQuality(item.url, item.html)
          return item.html
        },
      },
    ],

    layers: [
      {
        name: 'potser',
        html: `<img style="width: 100px" src="/assets/sample/layer.png">`,
        tooltip: 'Potser Tip',
        style: {
          position: 'absolute',
          top: '50px',
          right: '50px',
        },
        click(...args) {
          console.info('click', args)
        },
        mounted(...args) {
          console.info('mounted', args)
        },
      },
    ],
  })
}

onMounted(() => {
  initPlayer()
})
</script>

<template>
  <div ref="artRef" class="video-wrap" />
</template>

<style scoped>
.video-wrap {
  width: 100%;
  height: 100%;
}
</style>
