import { resolve } from "node:path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

export default defineConfig({
  plugins: [vue()],
  base: "./",
  server: {
    host: "127.0.0.1",
    port: 5173,
    strictPort: true,
    cors: {
      origin: "http://localhost:1313"
    }
  },
  build: {
    outDir: "static/qingshuige-vue",
    emptyOutDir: true,
    lib: {
      entry: resolve(import.meta.dirname, "frontend/main.js"),
      formats: ["es"],
      fileName: "qingshuige-vue",
      cssFileName: "qingshuige-vue"
    }
  }
})
