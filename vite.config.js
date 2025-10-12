import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import viteRewriteAll from "vite-plugin-rewrite-all";

export default defineConfig({
  base: "/", // Required for GitHub Pages root domain
  plugins: [react(), tailwindcss(), viteRewriteAll()],
  build: {
    target: "esnext",
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id.split("node_modules/")[1].split("/")[0];
          }
        },
      },
    },
  },
});
