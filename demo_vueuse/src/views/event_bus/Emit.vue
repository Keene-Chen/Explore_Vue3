<script lang="ts" setup>
  import { useEventBus } from '@vueuse/core';

  const myEventBus = useEventBus<string>('my-event-bus');

  const handleClick = () => {
    console.log('Emitting event...');
    
    myEventBus.emit('Hello World!');
  };
</script>

<template>
  <button @click="handleClick">Emit</button>
</template>
