// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import markdoc from "@astrojs/markdoc";
import expressiveCode from "astro-expressive-code";

function getSiteUrl() {
  const presetSite = process.env.SITE;
  let url = presetSite;
  if (!presetSite) {
    url = "http://localhost:4321";
  }

  console.log("Site URL:", url);

  return url;
}

// https://astro.build/config
export default defineConfig({
  integrations: [
    (await import("@playform/compress")).default({
      CSS: false,
      HTML: false,
      JavaScript: false,
    }),
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

  build: {
    inlineStylesheets: "always",
  },

  vite: {
    plugins: [],
  },

  site: getSiteUrl(),
  output: "static",
});
