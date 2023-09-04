/* eslint-disable no-undef */
import react from '@vitejs/plugin-react'
import path from 'path'

import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@panda': path.resolve(__dirname, 'node_modules/styled-system'),
      '@pandaType': path.resolve(__dirname, 'node_modules/styled-system/types'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
})
