import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      // "@door/common": path.resolve()
    ]
  },
  plugins: [react()]
})
