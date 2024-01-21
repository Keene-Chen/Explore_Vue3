<template>
  <h2> Count 组件 </h2>
  <p>数量：{{ count }}</p>
  <p>状态：{{ state }}</p>
</template>

<script>
export default {
  name: 'MyCount',
  // 使用数组props没有类型验证
  // props: ['count','state']

  /**
   * 对象类型的 props 节点提供了多种数据验证方案，例如：
   * 基础的类型检查
   * 多个可能的类型
   * 必填项校验
   * 属性默认值
   * 自定义验证函数
   */
  props: {
    count: [Number, String],
    state: {
      type: Boolean, // 类型
      require: true, // 必填项
      default: false // 默认值
    },
    type: {
      validator(value) {
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
}
</script>
