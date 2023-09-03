import react from '@vitejs/plugin-react';
import path from "path";

import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@panda': path.resolve(__dirname, 'node_modules/styled-system'),
      '@components': path.resolve(__dirname, './src/components'),
    }
  }
})
