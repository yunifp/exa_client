import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    proxy: {
      "/api": {
        target: "https://api.logikarya.my.id", // Arahkan ke Backend Asli
        changeOrigin: true,
        secure: false,
        // MAGIC SCRIPT: Ini yang bikin cookie mau disimpan di localhost
        cookieDomainRewrite: "localhost",
      },
    },
  },
});