import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175,  // Устанавливаем порт 5175
    host: true   // Разрешаем доступ с других устройств
  }
})