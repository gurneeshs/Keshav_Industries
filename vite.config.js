import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/user': {
  //       target: 'https://razorpayserver-production.up.railway.app',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/user/, '/user'),
  //       // secure: false,
  //     },
  //   },
  // },

})

