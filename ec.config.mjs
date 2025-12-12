import { defineEcConfig } from "astro-expressive-code";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import { LIGHT_CODE_THEME, DARK_CODE_THEME } from "./src/util/color-scheme.mjs";

export default defineEcConfig({
  themes: [LIGHT_CODE_THEME, DARK_CODE_THEME],

  defaultProps: {
    wrap: true,
    preserveIndent: true,
    showLineNumbers: true,
    overridesByLang: {
      "bash,sh,zsh": { wrap: false },
    },
  },

  styleOverrides: {
    codeFontSize: "var(--code-font-size)",
    codeFontFamily: "var(--code-font)",
  },

  shiki: {
    wrap: true,
  },

  plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
});
