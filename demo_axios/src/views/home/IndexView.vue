<script lang="ts" setup>
import { useThemeStore } from '@/store/useThemeStore';
</script>

<template>{{ useThemeStore().count }}</template>
