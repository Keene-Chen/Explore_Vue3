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
const page = ref<number>(2);

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
  <n-layout style="height: 100vh; width: 100vw">
    <n-layout-header position="absolute" style="height: 64px; padding: 24px" bordered>
      颐和园路
    </n-layout-header>

    <n-layout position="absolute" style="top: 64px" has-sider>
      <n-layout-sider content-style="padding: 24px;" :native-scrollbar="false" bordered>
        <template v-for="item in 20" :key="item">
          <n-h2>{{ item }}</n-h2>
        </template>
      </n-layout-sider>

      <n-layout-content content-style="padding: 10px;">
        <n-flex justify="start" :size="[20, 20]">
          <template v-for="item in 25" :key="item">
            <n-tooltip placement="bottom" trigger="hover">
              <template #trigger>
                <n-button strong secondary type="primary">{{ item }}</n-button>
              </template>
              <span>{{ item }}</span>
            </n-tooltip>
          </template>
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
        <n-divider />
        <n-flex justify="center">
          <n-pagination
            v-model:page="page"
            :page-count="100"
            size="large"
            show-quick-jumper
            show-size-picker
          />
        </n-flex>
      </n-layout-content>
    </n-layout>

    <n-layout-footer position="absolute" style="height: 64px; padding: 12px" bordered>
      城府路56456456
    </n-layout-footer>
  </n-layout> 
</template>

<style scoped>
.n-layout-header,
.n-layout-footer {
  background: #773737;
  padding: 12px 10px;
}

.n-layout-sider {
  background: #773737;
}

.n-layout-content {
  background: #2aa97643;
}
</style>
