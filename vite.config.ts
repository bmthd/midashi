/// <reference types="vitest" />
import { resolve } from "path";
import { defineConfig } from 'vite';
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [dts(),react()],
  build: {
    lib: {
      entry: resolve(__dirname, "./lib/index.ts"),
      name: "react-h", 
      fileName: "index",
      formats: ["es", "umd"],
    },
    rollupOptions:{
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
        banner: `'use client';`,
      },

    }
  },
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./test/setup.ts",
    exclude: ["./node_modules/**"],
  },
})
