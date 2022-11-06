import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "https://worker-production-75a8.up.railway.app/",
    },
    host: true,
  },
  plugins: [react()],
});