<template>
  <!-- from 表单 -->
  <form class="from-inline" @submit.prevent="onFormSubmit">
    <div class="input-group mb-2 mr-sm-2">
      <!-- 输入框前缀 -->
      <div class="input-group-prepend">
        <div class="input-group-text">任务</div>
      </div>
      <!-- 文本输入框 -->
      <input type="text" class="form-control" placeholder="请填写任务信息" v-model.trim="taskname" />

      <!-- 添加按钮 -->
      <button type="submit" class="btn btn-primary mb-2">添加新任务</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'TodoInput',
  // 声明自定义事件
  emits: ['add'],
  data() {
    return {
      taskname: '',
    }
  },
  methods: {
    onFormSubmit() {
      // 1. 判断任务名称是否为空
      if (!this.taskname) return alert('任务名称不能为空！')
      // 2. 触发自定义的 add 事件，并向外界传递数据
      this.$emit('add', this.taskname)
      // 3. 清空文本框
      this.taskname = ''
    }
  },
}
</script>

<style lang="less" scoped>
.from-inline {
  width: 400px;
}
</style>