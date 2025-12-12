import { getCollection, type CollectionEntry } from "astro:content";
import { fromMarkdown } from "mdast-util-from-markdown";
import { toString } from "mdast-util-to-string";

export const SHORT_EXCERPT_LENGTH = 50;

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

export function shortToDate(short: CollectionEntry<"shorts">) {
  const date = short.data.date;

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export function getShortTitleOrDate(short: CollectionEntry<"shorts">) {
  if (short.data.title) {
    return short.data.title;
  }

  return shortToDate(short);
}

export function getShortExcerpt(short: CollectionEntry<"shorts">) {
  const body = toString(fromMarkdown(short.body ?? ""));

  const words = body.split(" ");

  let excerpt = "";
  for (const word of words) {
    excerpt += word + " ";
    if (excerpt.length > SHORT_EXCERPT_LENGTH) {
      break;
    }
  }

  return excerpt.trim() + "...";
}
