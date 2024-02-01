<script lang="ts" setup>
import router from '@/router/index';
import { Moon, Sun } from 'lucide-vue-next';
import { ref } from 'vue';

const theme = ref('dark');

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark';
};
</script>

<template>
  <n-layout-header position="absolute" bordered>
    <n-grid :x-gap="12"  :cols="12">
      <n-gi>
        <n-button @click="router.push('/')">home</n-button>
      </n-gi>
      <n-gi>
        <n-button @click="router.push('/lucide')">lucide</n-button>
      </n-gi>
      <n-gi :offset="8">
        <n-switch v-model:value="theme" size="medium">
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
