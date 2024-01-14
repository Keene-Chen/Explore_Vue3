<script lang="ts" setup>
import DPlayer from 'dplayer';
import Hls from 'hls.js';
import { onMounted, ref } from 'vue';

let dp: any = null;
const dplayer = ref();

// 初始化播放器
const initPlayer = () => {
  dp = new DPlayer({
    container: dplayer.value,
    autoplay: false,
    theme: 'green',
    loop: true,
    lang: 'zh-cn',
    screenshot: true,
    hotkey: true,
    preload: 'auto',
    volume: 0.5,
    mutex: false,
    logo: 'https://i.loli.net/2019/06/06/5cf8c5d94521136430.png',
    video: {
      // url: 'https://gcalic.v.myalicdn.com/gc/wgw05_1/index.m3u8?contentid=2820180516001',
      url: '',
      type: 'customHls',
      customType: {
        customHls: (video: any, player: any) => {
          // console.log('查看传递的参数', video, player);
          const hls = new Hls();
          hls.loadSource(video.src);
          hls.attachMedia(video);
        },
      },
    },
    contextmenu: [
      {
        text: 'custom1',
        link: 'https://github.com/DIYgod/DPlayer',
      },
      {
        text: 'custom2',
        click: (player: any) => {
          console.log(player);
        },
      },
    ],
  });
};

onMounted(() => {
  initPlayer();
});
</script>

<template>
  <div ref="dplayer" class="video-warp"></div>
</template>

<style scoped>
.video-warp {
  width: 100%;
  height: 100%;
}
</style>
