import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
  allowedHosts: [
    'localhost',
    '127.0.0.1',
    "4d68fb2d90cd.ngrok-free.app"
  ]
}
})
