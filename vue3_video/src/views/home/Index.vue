<script lang="ts" setup>
import router from '@/router/index';
import { NButton, NLayout, NLayoutContent, NLayoutFooter, NLayoutHeader, NSpace } from 'naive-ui';
</script>

<template>
  <n-space vertical size="large">
    <n-layout>
      <n-layout-header bordered>
        <n-button quaternary type="primary" @click="router.push('/')">首页</n-button>
        <n-button quaternary type="primary" @click="router.push('/artplayer')"> artplayer </n-button>
        <n-button quaternary type="primary" @click="router.push('/dplayer')"> dplayer </n-button>
        <n-button quaternary type="primary" @click="router.push('/404')">按钮</n-button>
      </n-layout-header>
      <n-layout-content>sss </n-layout-content>
      <n-layout-footer>成府路</n-layout-footer>
    </n-layout>
  </n-space>
</template>

<style scoped>
.n-layout-header {
  height: 64px;
  padding: 12px 10px;
}

.n-button {
  color: aliceblue;
}
</style>
