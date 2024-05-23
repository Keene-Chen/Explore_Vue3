<script lang="ts" setup>
import videoSource from '@/assets/videoSource.json'
import Artplayer from 'artplayer'
import { onMounted, ref } from 'vue'

const artRef = ref()
let art: Artplayer

const initPlayer = () => {
  art = new Artplayer({
    container: artRef.value,
    url: videoSource.video[3].url,
    mutex: false,
    autoSize: false,
    autoplay: false,
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
          art.switchQuality(item.url)
          return item.html
        },
      },
    ],

    layers: [
      {
        name: 'potser',
        html: `<img style="width: 100px" src="https://artplayer.org/assets/sample/layer.png">`,
        tooltip: 'Potser Tip',
        style: {
          position: 'absolute',
          top: '50px',
          right: '50px',
        },
        click: (...args) => {
          console.info('click', args)
        },
        mounted: (...args) => {
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
  <div ref="artRef" class="container-wrap" />
</template>

<style scoped>
.container-wrap {
  width: 100%;
  height: 100%;
}
</style>
