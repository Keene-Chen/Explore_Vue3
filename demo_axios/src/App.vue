<script lang="ts" setup>
import { darkTheme, dateZhCN, zhCN } from 'naive-ui';
</script>

<template>
  <n-config-provider :theme="darkTheme" :locale="zhCN" :date-locale="dateZhCN">
    <n-notification-provider>
      <n-loading-bar-provider>
        <n-message-provider>
          <n-modal-provider>
            <n-dialog-provider>
              <router-view />
            </n-dialog-provider>
          </n-modal-provider>
        </n-message-provider>
      </n-loading-bar-provider>
    </n-notification-provider>
  </n-config-provider>
</template>
