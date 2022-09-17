import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/bricks-breaker/",
  plugins: [svelte(), tsconfigPaths()],
});
