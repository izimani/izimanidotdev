import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const story = defineCollection({
  loader: glob({
    pattern: "*.mdoc",
    base: "src/content/story",
  }),
});

const index = defineCollection({
  loader: glob({
    pattern: "*.mdoc",
    base: "src/content/index",
  }),
});

const shorts = defineCollection({
  loader: glob({
    pattern: "*.mdoc",
    base: "src/content/shorts",
  }),
  schema: z.object({
    title: z.string().optional(),
    date: z.coerce.date(),
    live: z.boolean().default(false),
    categories: z.array(z.string()).default([]),
  }),
});

const posts = defineCollection({
  loader: glob({
    pattern: "*.mdoc",
    base: "src/content/posts",
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    updated: z.coerce.date().optional(),
    live: z.boolean().default(false),
    categories: z.array(z.string()).default([]),
  }),
});

const highlightedProjects = defineCollection({
  loader: glob({
    pattern: "*.md",
    base: "src/content/projects/highlighted",
  }),
  schema: z.object({
    title: z.string(),
    link: z.string().optional(),
    cta: z.string().default("read more"),
    image: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  shorts,
  posts,
  highlightedProjects,
  story,
  index,
};
