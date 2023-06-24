<template>
  <h1>这是 App.vue 根组件</h1>
  <hr />

  <my-count @change="getCount"></my-count>
</template>

<script>
import MyCount from './Count.vue'

export default {
  name: 'MyApp',
  components: {
    MyCount
  },
  methods: {
    getCount(v) {
      console.log('监听到count值的变化', v)
    }
  }
}
</script>
