export const LIGHT_CODE_THEME = "github-light";
export const DARK_CODE_THEME = "github-dark";
export const COLOR_SCHEME_CHANGE_EVENT_NAME = "color-scheme-change";

export function getInitialColorScheme() {
  if (typeof document === "undefined" || typeof window === "undefined") {
    return "light";
  }

  // eslint-disable-next-line no-undef
  const colorSchemeMeta = document.querySelector("meta[name=color-scheme]");

  let colorScheme = colorSchemeMeta.content;
  if (colorScheme !== "light" && colorScheme !== "dark") {
    // eslint-disable-next-line no-undef
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      colorScheme = "dark";
    } else {
      colorScheme = "light";
    }
  }

  return colorScheme;
}

export function chooseCodeTheme(colorScheme) {
  return colorScheme === "dark" ? DARK_CODE_THEME : LIGHT_CODE_THEME;
}
