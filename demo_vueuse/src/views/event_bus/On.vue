<script lang="ts" setup>
  import { useEventBus } from '@vueuse/core';
  import { onMounted, ref } from 'vue';

  const myEventBus = useEventBus<string>('my-event-bus');
  const message = ref<string>('');

  onMounted(() => {
    myEventBus.on(data => {
      console.log('Received data:', data);
      message.value = data;
    });
  });
</script>

<template>
  {{ message }}
</template>
