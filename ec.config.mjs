import { defineEcConfig } from "astro-expressive-code";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

export default defineEcConfig({
  themes: ["github-dark"],

  defaultProps: {
    wrap: true,
    preserveIndent: true,
    showLineNumbers: true,
    overridesByLang: {
      "bash,sh,zsh": { wrap: false },
    },
  },

  styleOverrides: {
    codeFontSize: "0.8rem",
  },

  shiki: {
    wrap: true,
  },

  plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
});
