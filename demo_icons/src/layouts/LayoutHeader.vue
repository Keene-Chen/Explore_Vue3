<script lang="ts" setup>
import router from '@/router/index';
import { Moon, Sun } from 'lucide-vue-next';
import { useLoadingBar } from 'naive-ui';
import { ref } from 'vue';

const loadingBar = useLoadingBar();
const theme = ref('dark');

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark';
};

const handleRouter = (path: string) => {
  loadingBar.start();
  setTimeout(() => {
    router.push(path);
    loadingBar.finish();
  }, 0);
};
</script>

<template>
  <n-layout-header position="absolute" bordered>
    <n-grid :x-gap="12" :cols="12">
      <n-gi>
        <n-button @click="handleRouter('/')">home</n-button>
      </n-gi>
      <n-gi>
        <n-button @click="handleRouter('/lucide')">lucide</n-button>
      </n-gi>
      <n-gi :offset="8">
        <n-switch size="medium" @update:value="toggleTheme">
          <template #checked-icon>
            <n-icon :component="Moon" />
          </template>
          <template #unchecked-icon>
            <n-icon :component="Sun" />
          </template>
          <template #checked> 暗色 </template>
          <template #unchecked> 亮色 </template>
        </n-switch>
      </n-gi>
    </n-grid>
  </n-layout-header>
</template>

<style scoped>
.n-layout-header {
  height: 64px;
  padding: 12px 10px;
}
</style>
