import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const shorts = defineCollection({
  loader: glob({
    pattern: "*.md",
    base: "src/content/shorts",
  }),
  schema: z.object({
    title: z.string().optional(),
    date: z.date(),
  }),
});

export const collections = {
  shorts,
};
