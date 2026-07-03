import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  resolve: {
    alias: {
      "#shared": path.resolve(__dirname, "src/shared"),
      "#widgets": path.resolve(__dirname, "src/widgets"),
      "#features": path.resolve(__dirname, "src/features"),
      "#entities": path.resolve(__dirname, "src/entities"),
      "#pages": path.resolve(__dirname, "src/pages"),
      "#app": path.resolve(__dirname, "src/app"),
      "#assets": path.resolve(__dirname, "public/assets"),
      "#fonts": path.resolve(__dirname, "public/fonts"),
    },
  },
});
