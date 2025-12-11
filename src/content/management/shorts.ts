import { getCollection, type CollectionEntry } from "astro:content";

export async function getSortedLiveShorts(): Promise<
  CollectionEntry<"shorts">[]
> {
  function isLive(short: CollectionEntry<"shorts">) {
    return short.data.live;
  }

  function sortByDateDescending(
    a: CollectionEntry<"shorts">,
    b: CollectionEntry<"shorts">,
  ) {
    return b.data.date.getTime() - a.data.date.getTime();
  }

  return (await getCollection("shorts", isLive)).sort(sortByDateDescending);
}

export async function getSortedLiveShortsInCategory(
  category: string,
): Promise<CollectionEntry<"shorts">[]> {
  const shorts = await getSortedLiveShorts();

  const shortsInCategory = shorts.filter((s) =>
    s.data.categories.includes(category),
  );

  return shortsInCategory;
}

export async function getShortCategories(): Promise<string[]> {
  const shorts = await getSortedLiveShorts();

  const categorySet = new Set<string>();
  for (const short of shorts) {
    for (const category of short.data.categories) {
      categorySet.add(category);
    }
  }

  return Array.from(categorySet);
}

export function shortToLink(short: CollectionEntry<"shorts">) {
  return `/shorts/${short.id}`;
}
