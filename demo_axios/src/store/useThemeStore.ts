import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', {
  state: () => {
    return {
      count: 0,
      isDark: true,
    };
  },
  persist: true,
});
