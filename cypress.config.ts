import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: process.env.EXPO_PUBLIC_APP_URL || "http://localhost:8081",
    viewportWidth: 320,
    viewportHeight: 568,
  },
});
