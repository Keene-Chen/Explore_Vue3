<script lang="ts" setup>
import { NH2, NLayout, NLayoutContent, NLayoutFooter, NLayoutHeader, NLayoutSider } from 'naive-ui';
</script>

<template>
  <n-layout position="absolute" has-sider>
    <n-layout-sider
      bordered
      content-style="padding: 24px;"
      collapse-mode="width"
      :collapsed-width="60"
      :width="240"
      show-trigger="arrow-circle"
      :native-scrollbar="false"
    >
      侧边栏
    </n-layout-sider>
    <n-layout :native-scrollbar="false">
      <n-layout-header position="absolute" bordered>顶部</n-layout-header>
      <n-layout-content content-style="padding: 60px 0 0 10px;" >
        <template v-for="item in 15" :key="item">
          <n-h2>中间</n-h2>
        </template>
      </n-layout-content>
      <n-layout-footer bordered>尾部</n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<style scoped>
.n-layout {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.n-layout-header,
.n-layout-footer {
  background: #dfd8d8;
  padding: 12px 10px;
}

.n-layout-sider {
  background: #8080804d;
}

.n-layout-content {
  background: #80808066;
}
</style>
