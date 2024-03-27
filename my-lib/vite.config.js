import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

export default defineConfig({
  plugins: [vue(), vuetify()],
  // plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/entry.js"),
      name: "my-lib",
      fileName: "my-lib",
    },
    rollupOptions: {
      external: [
        "vue",
        "vuetify",
      ],
      output: {
        globals: {
          vue: "Vue",
          vuetify: "vuetify",
        },
        // exports: "named",
      },
    },
  },
});