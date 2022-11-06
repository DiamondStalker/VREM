import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://172.17.2.86:7781/",
    },
    host: true,
  },
  plugins: [react()],
});