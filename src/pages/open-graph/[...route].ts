import { OGImageRoute } from "astro-og-canvas";
import { pagesBySlug } from "../../open-graph";

type RgbColorTuple = [number, number, number];

const paperBeige: RgbColorTuple = [243, 238, 217];
const deepEmerald: RgbColorTuple = [15, 94, 59];
const charcoal: RgbColorTuple = [46, 46, 46];

export const { getStaticPaths, GET } = OGImageRoute({
  param: "route",

  pages: pagesBySlug,

  getImageOptions: (path, page) => ({
    title: page.title,
    description: page.description,
    padding: 60,
    logo: {
      path: "./public/logo.png",
      size: [100],
    },
    bgGradient: [paperBeige],
    fonts: [
      "https://cdn.jsdelivr.net/fontsource/fonts/ibm-plex-serif@latest/latin-400-normal.woff2",
      "https://cdn.jsdelivr.net/fontsource/fonts/vollkorn:vf@latest/latin-wght-italic.woff2",
    ],
    font: {
      title: {
        color: deepEmerald,
        weight: "SemiBold",
        size: 100,
        families: ["Vollkorn"],
      },
      description: {
        color: charcoal,
        weight: "Normal",
        size: 40,
        families: ["IBM Plex Serif"],
      },
    },
  }),
});
