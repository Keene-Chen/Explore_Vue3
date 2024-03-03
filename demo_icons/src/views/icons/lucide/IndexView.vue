<script lang="ts" setup>
import * as icons from 'lucide-vue-next';
import { useMessage } from 'naive-ui';
import { computed, reactive, ref } from 'vue';

const message = useMessage();

const iconObj = reactive({
  size: 24,
  color: '#E8E8E8',
  strokeWidth: 2,
  defaultClass: 'icon',
});

// 每页显示的图标数
const iconsPerPage = 162;

// 当前页码
const currentPage = ref(1);
// 总页码，使用 Math.ceil 来确保总是向上取整
const totalPage = computed(() => Math.ceil(Object.entries(icons).length / iconsPerPage));

// 计算当前页的图标
const iconList = computed(() => {
  // 计算当前页面应显示的图标范围
  const startIndex = (currentPage.value - 1) * iconsPerPage;
  const endIndex = startIndex + iconsPerPage;

  // 返回当前页面的图标
  return Object.entries(icons)
    .slice(startIndex, endIndex)
    .map(([name, component]) => ({ name, component }));
});

const handleCopy = async (name: string) => {
  try {
    // 将所有非字母数字字符转换为短横线，并转为小写
    const transformedText = name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
    await navigator.clipboard.writeText(transformedText);
    message.success(`Copied: ${transformedText}`);
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
};
</script>

<template>
  <n-flex justify="start">
    <n-card>
      <n-flex vertical>
        <span>自定义</span>
        <n-button>恢复</n-button>
        <span>Color</span>
        <n-color-picker
          v-model:value="iconObj.color"
          :swatches="['#FFFFFF', '#18A058', '#2080F0', '#F0A020', 'rgba(208, 48, 80, 1)']"
        >
        </n-color-picker>
        <span>Stroke width {{ iconObj.strokeWidth }}px</span>
        <n-slider v-model:value="iconObj.strokeWidth" :step="0.25" :min="0.5" :max="3" />
        <span>Size width {{ iconObj.size }}px</span>
        <n-slider v-model:value="iconObj.size" :step="4" :min="16" :max="48" />
      </n-flex>
    </n-card>
    <template v-for="{ name, component } in iconList" :key="name">
      <n-tooltip placement="bottom" trigger="hover">
        <template #trigger>
          <n-button tertiary type="primary" size="large" @click="handleCopy(name)">
            <component
              :is="component"
              :size="iconObj.size"
              :color="iconObj.color"
              :stroke-width="iconObj.strokeWidth"
              :class="iconObj.defaultClass"
            ></component>
          </n-button>
        </template>
        <span>{{ name }}</span>
      </n-tooltip>
    </template>
  </n-flex>
  <n-divider />
  <n-flex justify="center">
    <n-pagination
      v-model:page="currentPage"
      :page-count="totalPage"
      size="large"
      show-quick-jumper
      show-size-picker
    />
  </n-flex>
</template>

<style scoped>
.n-card {
  max-width: 200px;
}
</style>
