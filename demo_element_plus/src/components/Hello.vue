<script setup lang="ts">
import { ElButton } from 'element-plus';
import { Camera } from 'lucide-vue-next';
import { ref } from 'vue';

const loading = ref(false);
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header width="200px">Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main> </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>

  <el-button auto-insert-space type="primary" plain :loading="loading" :icon="Camera">我是</el-button>
</template>

<style scoped></style>
