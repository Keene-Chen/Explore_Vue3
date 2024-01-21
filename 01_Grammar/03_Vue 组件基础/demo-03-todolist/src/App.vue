<template>
  <h1>这是App根组件</h1>
  <hr />

  <!-- 引用 TodoInput 子组件-->
  <todo-input @add="onAddNewTask"></todo-input>
  <!-- 引用 TodoList 子组件-->
  <todo-list :list="tasklist" class="mt-2"></todo-list>
  <!-- 引用 TodoButton 子组件-->
  <todo-button v-model:active="activeBtnIndex"></todo-button>
</template>

<script >
import TodoList from './components/todo-list/TodoList.vue'
import TodoInput from './components/todo-input/TodoInput.vue'
import TodoButton from './components/todo-button/TodoButton.vue'

export default {
  name: 'MyApp',
  data() {
    return {
      // 任务列表数据
      todolist: [
        { id: 1, task: '周一早晨九点开会', done: false },
        { id: 2, task: '周一晚上八点聚餐', done: false },
        { id: 3, task: '写点代码', done: true },
      ],
      // 下一个可用ID值
      nextId: 4,
      activeBtnIndex: 0,
    }
  },
  components: {
    TodoList,
    TodoInput,
    TodoButton
  },
  computed: {
    tasklist() {
      switch (this.activeBtnIndex) {
        case 0:
          return this.todolist
        case 1:
          return this.todolist.filter(x => x.done === true)
        case 2:
          return this.todolist.filter(x => x.done !== true)
      }
    }
  },
  methods: {
    onAddNewTask(taskname) {
      // 1. 向任务列表中新增任务信息
      this.todolist.push({
        id: this.nextId,
        task: taskname,
        done: false, // 完成状态默认为 false
      })
      // 2. 让 nextId 自增+1
      this.nextId++
    }
  },
}
</script>

<style lang="less" scoped></style>