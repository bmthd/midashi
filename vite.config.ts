/// <reference types="vitest" />
import { resolve } from "path";
import { defineConfig } from 'vite';
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: resolve(__dirname, "./lib/index.ts"),
      name: "react-h", 
      fileName: "index",
      formats: ["es", "umd"],
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./test/setup.ts",
    exclude: ["./node_modules/**"],
  },
})
