import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/Biblical-language-promotion/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false, // Recomendado para producción
    minify: 'terser', // Mejor minificación
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name]-[hash].js", // Agregar hash para cache
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
  // Para desarrollo local
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  }
});