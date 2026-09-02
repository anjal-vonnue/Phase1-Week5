import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@components": new URL("./js/components", import.meta.url).pathname,
      "@pages": new URL("./js/pages", import.meta.url).pathname,
    },
  },

  test: {
    environment: "jsdom",
    exclude: ["node_modules/**", "dist/**"],
  },
});
