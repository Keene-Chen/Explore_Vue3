<template>
  <!-- 动态绑定class -->
  <h3 class="thin" :class="isItalic ? 'italic' : ''"> MyStyle 组件 </h3>
  <button @click="isItalic = !isItalic"> Toggle Italic </button>
  <hr />

  <!-- 使用数组方式绑定多个class -->
  <h3 class="thin" :class="[isItalic ? 'italic' : '', isDelete ? 'delete' : '']"> MyStyle 组件 </h3>
  <button @click="isItalic = !isItalic"> Toggle Italic </button>
  <button @click="isDelete = !isDelete"> Toggle Delete </button>
  <hr />

  <!-- 使用对象方式绑定多个class -->
  <h3 class="thin" :class="classObj"> MyStyle 组件 </h3>
  <button @click="classObj.italic = !classObj.italic"> Toggle Italic </button>
  <button @click="classObj.delete = !classObj.delete"> Toggle Delete </button>
  <hr />

  <!-- 以对象语法绑定内联的 style -->
  <div :style="{ color: style.active, fontSize: style.fsize + 'px', 'background-color': style.bgcolor }">KeeneChen</div>
  <button @click="style.fsize += 5">字号+5</button>
  <button @click="style.fsize -= 5">字号-5</button>
</template>

<script>
export default {
  name: 'MyStyle',
  data() {
    return {
      isItalic: true,
      isDelete: false,
      classObj: {
        italic: true,
        delete: false,
      },
      style: {
        active: 'red',
        fsize: 30,
        bgcolor: 'pink'
      }
    }
  },
}
</script>

<style lang="less" >
.thin {
  font-weight: 200;
}

.italic {
  font-style: italic;
  font-weight: normal;
  color: red;
}

.delete {
  text-decoration: line-through;
}
</style>