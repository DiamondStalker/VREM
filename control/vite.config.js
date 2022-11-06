import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "https://control-de-asistencia.up.railway.app:5000/",
    },
    host: true,
  },
  plugins: [react()],
});