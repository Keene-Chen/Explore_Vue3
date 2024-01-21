<template>
  <h1>这是 <i>App.vue</i> 根节点组件</h1>
  <hr />

  <h2>
    {{ count }} <button type="button" @click="addCount">+1</button>
  </h2>
  <hr />

  <my-swiper></my-swiper>
  <my-test></my-test>
  <hr />

  <my-search></my-search>
</template>

<script>
// 导入局部组件
import Search from './components/02_privateReg/Search.vue';

export default {
  name: 'MyApp',
  data() {
    return {
      name: 'KeeneChen',
      count: 0
    }
  },
  methods: {
    addCount() {
      this.count++;
    }
  },
  components: {
    'MySearch': Search
  }
}
</script>

<style lang="less">
h1 {
  font-family: 'LXGW WenKai';

  i {
    color: aqua;
  }
}
</style>