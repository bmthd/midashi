/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { name } from "./package.json";

const formattedName = name.match(/[^/]+$/)?.[0] ?? name

export default defineConfig({
  plugins: [dts(), react()],
  build: {
    lib: {
      entry: resolve(__dirname, "./lib/index.ts"),
      name: "midashi",
      formats: ["es", "umd"],
      fileName: (format) => `${formattedName}.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react/jsx-runtime': 'react/jsx-runtime',
          'react-dom': 'ReactDOM',
        },
        banner: `'use client';`,
      },
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./test/setup.ts",
    exclude: ["./node_modules/**"],
  },
});
