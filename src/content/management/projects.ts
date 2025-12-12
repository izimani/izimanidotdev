import { getCollection, type CollectionEntry } from "astro:content";

export async function getHighlightedProjects(): Promise<
  CollectionEntry<"highlightedProjects">[]
> {
  return (await getCollection("highlightedProjects")).sort(
    (a, b) => a.data.order - b.data.order,
  );
}
