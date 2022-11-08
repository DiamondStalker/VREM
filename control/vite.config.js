import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://worker-production-75a8.up.railway.app/",
        changeOrigin: true,
        secure: false,
      },
    },
    host: true,
  },
  plugins: [react()],
});