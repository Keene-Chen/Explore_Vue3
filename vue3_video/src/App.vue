<script lang="ts" setup>
import { NConfigProvider, NMessageProvider, darkTheme } from 'naive-ui'
</script>

<template>
  <n-config-provider >
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>
