<template>
  <h2> 这是count子组件 </h2>
  <input type="text" v-model.number="count" />
  <p>{{ count }}*2= {{ plus }}</p>
  <p>{{ count }}*2= {{ plus }}</p>
  <p>{{ count }}*2= {{ plus }}</p>
</template>

<script>
export default {
  name: 'MyCount',
  data() {
    return {
      count: 1
    }
  },
  /**
   * 计算属性必须定义在 computed 节点中
   * 计算属性必须是一个 function 函数
   * 计算属性必须有返回值
   * 计算属性必须当做普通属性使用
   */
  computed: {
    plus() {
      console.log('计算属性被执行了')
      return this.count * 2
    }
  },
  methods: {
    // plus() {
    //   console.log('方法被执行了')
    //   return this.count * 2
    // }
  }
}
</script>