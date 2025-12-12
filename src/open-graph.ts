import { getSortedLivePosts, postToLink, getPostCategories } from "#posts";
import {
  getSortedLiveShorts,
  getShortCategories,
  shortToLink,
  getShortTitleOrDate,
  getShortExcerpt,
} from "#shorts";

export type OpenGraphPageKind = "website" | "article";

type OpenGraphPageData = {
  url: string;
  slug: string;
  title: string;
  description: string;
  kind: OpenGraphPageKind;
};

export class OpenGraphPage {
  constructor(private data: OpenGraphPageData) {}

  absoluteImageUrl(site: URL): string {
    return new URL(`/open-graph/${this.data.slug}.png`, site).href;
  }

  absoluteUrl(site: URL): string {
    return new URL(this.data.url, site).href;
  }

  get url(): string {
    return this.data.url;
  }

  get slug(): string {
    return this.data.slug;
  }

  get title(): string {
    return this.data.title;
  }

  get description(): string {
    return this.data.description;
  }

  get kind(): OpenGraphPageKind {
    return this.data.kind;
  }
}

const postPages: OpenGraphPageData[] = (await getSortedLivePosts()).map(
  (post) => ({
    url: postToLink(post),
    slug: `post-${post.id}`,
    title: post.data.title,
    description: post.data.excerpt,
    kind: "article",
  }),
);

const postCategoryPages: OpenGraphPageData[] = (await getPostCategories()).map(
  (category) => ({
    url: `/posts/categories/${category}`,
    slug: `post-category-${category}`,
    title: `Posts in ${category}`,
    description: `Articles, guides, and other writings, (mostly) about ${category}.`,
    kind: "website",
  }),
);

const shortPages: OpenGraphPageData[] = (await getSortedLiveShorts()).map(
  (short) => ({
    url: shortToLink(short),
    slug: `short-${short.id}`,
    title: getShortTitleOrDate(short),
    description: getShortExcerpt(short),
    kind: "article",
  }),
);

const shortCategoryPages: OpenGraphPageData[] = (
  await getShortCategories()
).map((category) => ({
  url: `/shorts/categories/${category}`,
  slug: `short-category-${category}`,
  title: `Shorts in ${category}`,
  description: `Feed of short and not-so-short but definitely unstructured thoughts about ${category}.`,
  kind: "website",
}));

const staticPages: OpenGraphPageData[] = [
  {
    url: "/",
    slug: "home",
    title: "Izimani",
    description:
      "Rescue vibe-coded projects and build your next big thing with seasoned engineers.",
    kind: "website",
  },
  {
    url: "/about-us",
    slug: "about-us",
    title: "About Us",
    description:
      "Experienced engineers with a track record of shipping products across ecommerce, fintech, sustainability, and more.",
    kind: "website",
  },
  {
    url: "/expertise/vibe-code-rescue",
    slug: "vibe-code-rescue",
    title: "Vibe Code Rescue",
    description:
      "AI code lost in space? Transform chaotic AI-generated code into clean, maintainable, production-ready solutions.",
    kind: "website",
  },
  {
    url: "/expertise/early-stage-development",
    slug: "early-stage-development",
    title: "Early-Stage Development",
    description:
      "From concept to liftoff in lightspeed. Leave the drawing board behind, and get that app you dreamed about up and running in no time.",
    kind: "website",
  },
  {
    url: "/expertise/internal-tools",
    slug: "internal-tools",
    title: "Internal Tools",
    description:
      "Launch beyond operational chaos. Automate processes and eliminate frustrating manual workflows with custom internal tools.",
    kind: "website",
  },
  {
    url: "/mission-logs",
    slug: "mission-logs",
    title: "Mission Logs",
    description:
      "Tips and engineering insights for software devs and vibe coders alike.",
    kind: "website",
  },
];

const pages: OpenGraphPage[] = [
  ...postPages,
  ...postCategoryPages,
  ...shortPages,
  ...shortCategoryPages,
  ...staticPages,
].map((page) => new OpenGraphPage(page));

export const pagesBySlug = Object.fromEntries(
  pages.map((page) => [page.slug, page]),
);
export const pagesByUrl = Object.fromEntries(
  pages.map((page) => [page.url, page]),
);

export function getPageByUrl(url: string): OpenGraphPage | undefined {
  return pagesByUrl[url];
}
