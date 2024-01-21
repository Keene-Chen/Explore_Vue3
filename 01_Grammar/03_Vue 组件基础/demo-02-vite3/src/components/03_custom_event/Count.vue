<template>
  <h2>这是 Count 子组件</h2>
  <p>count= {{ count }}</p>
  <button @click="onBtnClick"> +1</button>
</template>

<script>
export default {
  name: 'MyCount',
  data() {
    return {
      count: 0
    }
  },
  // my-counter组件的自定文事件，必须事先声明到 emits 节点中
  emits: ['change'],
  methods: {
    onBtnClick() {
      this.count++
      // 当点击 +1 按钮时，调用 this.$emit（）方法，触发自定义的 change 事件
      // 同时通过第二个参数传入自定义事件的参数，监听者将通过形参拿到监听的数据
      this.$emit('change', this.count)
    }
  }
}
</script>

<style lang="scss" scoped></style>