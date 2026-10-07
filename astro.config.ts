import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  compressHTML: false,
  integrations: [react()],
  image: {
    remotePatterns: [
      { protocol: "https", hostname: "media-www.sqspcdn.com" },
      { protocol: "https", hostname: "images.squarespace-cdn.com" },
      { protocol: "https", hostname: "static1.squarespace.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  vite: {
    build: {
      target: "esnext",
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  },
});
