import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import resolve from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    rollupOptions: {
      input: {
        main: resolve('app', 'renderer', 'index.html')
      }
    }
  }
})
