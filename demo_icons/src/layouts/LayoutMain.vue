<script lang="ts" setup></script>

<template>
  <n-layout position="absolute" style="top: 64px" has-sider>
    <n-layout-sider
      bordered
      content-style="padding: 24px;"
      collapse-mode="width"
      :collapsed-width="60"
      :width="240"
      show-trigger="arrow-circle"
      :native-scrollbar="false"
    >
      <template v-for="item in 20" :key="item">
        <n-h2>{{ item }}</n-h2>
      </template>
    </n-layout-sider>

    <n-layout :native-scrollbar="false">
      <n-layout-content content-style="padding: 10px;" :native-scrollbar="false">
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style scoped>
.n-layout-sider {
  background: #161618;
}

.n-layout-content {
  background: #161618;
  height: calc(100vh - 12px);
}

.n-layout-footer {
  background: #161618;
  padding: 12px 10px;
}
</style>
