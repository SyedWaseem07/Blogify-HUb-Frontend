import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
<<<<<<< HEAD
            '/api' : 'https://backend-blogify.onrender.com/'
=======
            '/api' : 'https://blogify-api-p7qp.onrender.com'
>>>>>>> ef759ca9ca4ba7f7f00edb7ff6d2972c78a92bcd
        }
    },
  plugins: [react()],
})
