<script lang="ts" setup>
import * as icons from 'lucide-vue-next';
import {
NFlex,
NLayout,
NLayoutContent,
NLayoutFooter,
NLayoutHeader,
NLayoutSider,
} from 'naive-ui';
import { computed, ref } from 'vue';

const loading = ref<boolean>(true);

const props = defineProps<{
  size?: number;
  color?: string;
  strokeWidth?: number;
  defaultClass?: string;
}>();

const iconList = computed(() =>
  Object.entries(icons).map(([name, component]) => ({ name, component }))
);
</script>

<template>
  <n-layout has-sider>
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
      <n-layout-content content-style="padding: 60px 260px 0 20px;">
        <n-flex justify="center" size="large">
          <!--   <template v-for="{ name, component } in iconList" :key="name">
            <component
              :is="component"
              :size="props.size"
              :color="props.color"
              :stroke-width="props.strokeWidth"
              :class="props.defaultClass"
            />
          </template> -->
        </n-flex>
      </n-layout-content>
      <n-layout-footer bordered>尾部</n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<style scoped>
.n-layout {
  width: 100vw;
  height: 100vh;
}

.n-layout-header,
.n-layout-footer {
  background: #773737;
  padding: 12px 10px;
}

.n-layout-sider {
  background: #773737;
}

.n-layout-content {
  background: #ffffff43;
}
</style>
