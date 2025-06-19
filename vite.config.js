import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
})

// This configuration sets up a Vite project with React support and specifies the base path for the application.
// The `base: './'` line ensures that the application can be served correctly from a subdirectory or when deployed to a static file server.
// The `react` plugin is used to enable React features in the Vite build process.
