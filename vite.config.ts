import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // GitHub Pages project site: https://pr0fi7.github.io/markreate/
  // Change this (and `homepage` in package.json) if you rename the repo or move
  // to a custom domain — a custom domain serves from "/".
  base: "/markreate/",
});
