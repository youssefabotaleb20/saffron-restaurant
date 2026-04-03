import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Set this to '/your-repo-name/' when deploying to GitHub Pages
  // e.g. base: '/saffron-restaurant/'
  // If using a custom domain or a username.github.io repo, use base: '/'
  base: '/saffron-restaurant/',
  plugins: [react()],
  server: {
    proxy: {
      // Proxy /api calls to the PHP dev server
      // Run: php -S localhost:8000 -t api/
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
