// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import playformCompress from "@playform/compress";
import markdoc from "@astrojs/markdoc";
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  integrations: [
    playformCompress(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
        },
      },
    }),
    markdoc(),
    expressiveCode(),
  ],

  vite: {
    plugins: [],
  },

  site: "http://localhost:4321",
  output: "static",
});
