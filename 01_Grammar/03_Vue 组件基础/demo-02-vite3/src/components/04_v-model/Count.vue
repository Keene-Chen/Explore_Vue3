<template>
  <h2>这是 Count 子组件</h2>
  <div class="container">
    <p>count={{ number }}</p>
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  name: 'MyCount',
  props: ['number'],
  emits: ['update:number'],
  methods: {
    add() {
      this.$emit('update:number', this.number + 1)
    }
  }
}
</script>