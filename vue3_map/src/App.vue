<script lang="ts" setup></script>

<template>
  <router-view />
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  font-size: 20px;
  font-weight: 500;
  color: #3b4cd1;
}

a {
  text-decoration: none;
  border-bottom: transparent 3px solid;
  color: #ccc;

  &:hover {
    border-bottom: #3b4cd1 3px solid;
    color: #3b4cd1;
    transition: all 0.3s ease;
    transform: scale(1.1);
  }
}
</style>
