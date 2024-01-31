<script lang="ts" setup>
import * as icons from 'lucide-vue-next'
import { computed } from 'vue'

const props = defineProps<{
  name: string
  size?: number
  color?: string
  strokeWidth?: number
  defaultClass?: string
}>()

const icon = computed(() => icons[props.name])
</script>

<template>
  <component
    :is="icon"
    :size="size"
    :color="color"
    :stroke-width="strokeWidth"
    :default-class="defaultClass"
  />
</template>
