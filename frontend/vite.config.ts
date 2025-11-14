import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "Aidan-Wong-Portfolio";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? `/${repoName}/` : "/",
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  }
}));
