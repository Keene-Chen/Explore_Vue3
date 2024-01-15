<script setup lang="ts">
import mpegts from 'mpegts.js';
import { onMounted, ref } from 'vue';
import dataSrc from '../assets/videoSource.json';

const videoElement = ref<HTMLVideoElement | null>(null);
const flvPlayer = ref<mpegts.Player | undefined>();
const flvPlayerVolume = ref<number>(0);

const createVideo = () => {
  if (mpegts.isSupported() && videoElement.value) {
    flvPlayer.value = mpegts.createPlayer({
      type: 'mp4',
      url: dataSrc.video[0].url,
      isLive: false,
      hasAudio: true,
      hasVideo: true,
    });

    flvPlayer.value.attachMediaElement(videoElement.value);
    flvPlayer.value.load();
    setTimeout(() => {
      if (flvPlayer.value) {
        flvPlayer.value.play();
        flvPlayer.value.muted = false;
        flvPlayerVolume.value = flvPlayer.value.volume;
      }
    }, 300);
    flvPlayer.value.on('error', () => console.error('视频加载失败，请稍候重试！'));
  }
};

const destroy = () => {
  if (flvPlayer.value) {
    flvPlayer.value.pause();
    flvPlayer.value.unload();
  }
};

defineExpose({ destroy });

const handleVolume = (increase: boolean) => {
  if (videoElement.value) {
    const currentVolume = videoElement.value.volume;

    // 如果音量已经是最大且试图增加，或者音量是最小且试图减少，则不执行操作
    if ((increase && currentVolume >= 1) || (!increase && currentVolume <= 0)) {
      console.log('音量已经是最大或最小了');
      return;
    }

    let newVolume = currentVolume + (increase ? 0.05 : -0.05);
    newVolume = Math.min(Math.max(newVolume, 0), 1); // 确保音量在0到1之间
    videoElement.value.volume = Number(newVolume.toFixed(2)); // 四舍五入到小数点后两位
    flvPlayerVolume.value = videoElement.value.volume;
    console.log(videoElement.value.volume);
  }
};

onMounted(() => {
  createVideo();
});
</script>

<template>
  <div class="video-warp">
    <video
      ref="videoElement"
      controls
      muted
      style="width: 100%; height: 100%; object-fit: fill"
    ></video>
  </div>
  <div>{{ flvPlayerVolume }}</div>
  <button @click="handleVolume(true)">+</button>
  <button @click="handleVolume(false)">-</button>
</template>

<style scoped>
.video-warp {
  width: 100%;
  height: 100%;
}
</style>
