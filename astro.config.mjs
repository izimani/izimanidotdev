// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import playformCompress from "@playform/compress";

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
  ],

  vite: {
    plugins: [],
  },

  site: "http://localhost:4321",
  output: "static",
});
