<template>
  <h1> 这是 App.vue 根组件</h1>
  <hr />

  <my-count></my-count>
</template>

<script>
import MyCount from './Count.vue'

export default {
  name: 'MyApp',
  components: {
    MyCount
  }
}
</script>
