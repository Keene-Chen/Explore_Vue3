import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import mockDevServerPlugin from 'vite-plugin-mock-dev-server';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), mockDevServerPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
      '@components': fileURLToPath(new URL('src/components', import.meta.url)),
      '@views': fileURLToPath(new URL('src/views', import.meta.url)),
      '@chart': fileURLToPath(new URL('src/views/chart', import.meta.url)),
    },
  },
});

