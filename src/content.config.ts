import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const shorts = defineCollection({
  loader: glob({
    pattern: "*.md",
    base: "src/content/shorts",
  }),
  schema: z.object({
    title: z.string().optional(),
    date: z.coerce.date(),
    live: z.boolean().default(false),
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
  }),
});

export const collections = {
  shorts,
  posts,
};
