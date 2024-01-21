<template>
  <h1>这是 App.vue 根组件</h1>
  <div class="container">
    <p>{{ count }}</p>
    <button @click="count++">+1</button>
  </div>
  <hr />

  <p>父向子组件传递数据，父组件使用v-bind，子组件使用props</p>
  <my-count :number="count"></my-count>
  <hr />

  <p>子向父组件传递数据，子组件使用emits，父组件使用v-model</p>
  <my-count v-model:number="count"></my-count>
</template>

<script>
import MyCount from './Count.vue'

export default {
  name: 'MyAPP',
  data() {
    return {
      count: 0
    }
  },
  components: {
    MyCount
  }
}
</script>

<style>
.container {
  /* 将容器内的元素按一行排列 */
  display: flex;
}

p,
button {
  /* 取消默认的边距 */
  margin: 10px;
}
</style>

