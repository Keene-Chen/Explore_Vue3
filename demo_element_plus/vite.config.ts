import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
      '@components': fileURLToPath(new URL('src/components', import.meta.url)),
      '@views': fileURLToPath(new URL('src/views', import.meta.url)),
      '@chart': fileURLToPath(new URL('src/views/chart', import.meta.url)),
    },
  },
});

