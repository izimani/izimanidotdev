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
    description: "The (mostly) software engineering site of Attila Bagossy.",
    kind: "website",
  },
  {
    url: "/shorts",
    slug: "shorts",
    title: "Shorts",
    description:
      "Feed of short and not-so-short but definitely unstructured thoughts and ideas.",
    kind: "website",
  },
  {
    url: "/posts",
    slug: "posts",
    title: "Posts",
    description:
      "Articles, guides, and other writings, (mostly) about software engineering.",
    kind: "website",
  },
  {
    url: "/projects",
    slug: "projects",
    title: "Projects",
    description:
      "A collection of projects I've worked on, mostly software engineering related.",
    kind: "website",
  },
  {
    url: "/story",
    slug: "story",
    title: "Story",
    description: "A collection of stories about my life and experiences.",
    kind: "website",
  },
  {
    url: "/contact",
    slug: "contact",
    title: "Contact",
    description: "I would love to hear from you!",
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
