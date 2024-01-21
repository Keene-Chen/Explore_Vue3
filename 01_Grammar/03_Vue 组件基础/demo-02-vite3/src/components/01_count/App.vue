<template>
  <h1>这是 App.vue 根组件</h1>
  <hr />

  <my-count :count="'a'" :state="false" type="success"></my-count>
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

<style lang="less">
hr {
  border: none;
  border-top: 1px solid;
}
</style>