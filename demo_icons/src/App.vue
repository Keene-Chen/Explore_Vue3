<script setup lang="ts">
import { darkTheme } from 'naive-ui';
import { RouterView } from 'vue-router';
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-loading-bar-provider>
      <n-message-provider>
        <RouterView />
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>
