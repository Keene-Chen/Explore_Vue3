<template>
  <div data-v-001>
    <h1 data-v-001>这是 App.vue 组件</h1>
    <p data-v-001>App 中的 p 标签</p>
    <p data-v-001>App 中的 p 标签</p>
    <hr data-v-001 />

    <my-list data-v-001></my-list>
  </div>
</template>

<script>
import MyList from './List.vue'

export default {
  name: 'MyApp',
  components: {
    MyList
  },
}
</script>

<!-- <style lang="less">
// 1.此时会控制全局的DOM,父子组件都将改变样式
/* 
p {
  color: red;
} 
*/

// 2.使用属性选择器解决父子组件样式冲突
p[data-v-001] {
  color: red;
}
</style> -->

<!-- 3.上述操作都可以用scoped属性解决 -->
<style lang="less" scoped>
// 加上scoped属性后当前组件将无法用于其他子组件样式，在Vue2中可以在选择器前面添加 /deep/ 用于样式穿透，Vue3中使用 :deep
/deep/ p {
  color: red;
}

:deep p {
  color: blue;
}
</style>