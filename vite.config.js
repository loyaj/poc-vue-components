import { globSync } from "glob";
import path, { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

const __dirname = dirname(fileURLToPath(import.meta.url));

const componentEntries = Object.fromEntries(
  globSync("src/components/Lucky*/*.vue").map(file => [
    // This removes `src/` as well as the file extension from each
    // file, so e.g. src/nested/foo.js becomes nested/foo
    path.relative(
      "src",
      file.slice(0, file.length - path.extname(file).length)
    ),
    // This expands the relative paths to absolute paths, so e.g.
    // src/nested/foo becomes /project/src/nested/foo.js
    fileURLToPath(new URL(file, import.meta.url))
  ])
);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({ template: { transformAssetUrls } }),
    // @quasar/plugin-vite options list:
    // https://github.com/quasarframework/quasar/blob/dev/vite-plugin/index.d.ts
    quasar({
      sassVariables: "public/quasar-variables.scss"
    })
  ],
  build: {
    lib: {
      entry: componentEntries,
      formats: ["es"]
    },
    // cssCodeSplit: true, // todo: find a way to bundle the css with each individual component
    sourcemap: true,
    minify: false,
    rollupOptions: {
      external: ["vue", "quasar", "design-tokens.css"]
    }
  },
  css: { devSourcemap: true },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },
  test: {
    environment: "jsdom",
    mockReset: true
  }
});
