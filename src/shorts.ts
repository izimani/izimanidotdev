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

export function shortToLink(short: CollectionEntry<"shorts">) {
  return `/shorts/${short.id}`;
}
