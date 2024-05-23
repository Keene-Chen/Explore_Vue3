<script lang="ts" setup>
import videoSource from '@/assets/videoSource.json'
import Artplayer from 'artplayer'
import { onMounted, onUnmounted, ref } from 'vue'

const artRef = ref()
let art: Artplayer

const initPlayer = () => {
  art = new Artplayer({
    container: artRef.value,
    url: videoSource.video[3].url,
    theme: '#57AFEF',
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
