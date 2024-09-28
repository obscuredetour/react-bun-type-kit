import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.md'],
  plugins: [react()],
  server: {
    host: true, // Enable access to the server from external devices or Docker
    port: 3000, // Ensure the port matches the Docker and host machine port
    watch: {
      usePolling: true, // Enable polling to ensure the server is updated
      interval: 100 // Lower the polling interval to 100ms
    }
  },
})
