import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://worker-production-75a8.up.railway.app:5000",
        changeOrigin: true,
        secure: false,
        mode: 'no-cors',
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
    cors:false,
    host: true,
  },
  plugins: [react()],
});