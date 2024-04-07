<script setup lang="ts">
import { useCounterStore } from '@/stores'

const counterStore = useCounterStore()
</script>

<template>
  <div style="display: flex; flex-direction: column">
    <span>{{ counterStore.count }}</span>
    <span>{{ counterStore.state.count }}</span>
    <button @click="counterStore.increment">Increment</button>
    <button @click="counterStore.decrement">Decrement</button>
  </div>
</template>
