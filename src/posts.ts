import { getCollection, type CollectionEntry } from "astro:content";

export type PostsGroupedByYear = {
  year: number;
  posts: CollectionEntry<"posts">[];
};

export async function getSortedLivePosts(): Promise<
  CollectionEntry<"posts">[]
> {
  function isLive(post: CollectionEntry<"posts">) {
    return post.data.live;
  }

  function sortByDateDescending(
    a: CollectionEntry<"posts">,
    b: CollectionEntry<"posts">,
  ) {
    return b.data.date.getTime() - a.data.date.getTime();
  }

  return (await getCollection("posts", isLive)).sort(sortByDateDescending);
}

export async function getGroupedLivePosts(): Promise<PostsGroupedByYear[]> {
  const posts = await getSortedLivePosts();

  const postsByYear: Record<number, CollectionEntry<"posts">[]> = {};

  for (const post of posts) {
    const year = post.data.date.getFullYear();
    console.log(year);
    if (!postsByYear[year]) {
      postsByYear[year] = [];
    }
    postsByYear[year].push(post);
  }

  const groupPostList = Object.entries(postsByYear).map(([year, posts]) => {
    return {
      year: parseInt(year),
      posts,
    };
  });

  return groupPostList.sort((a, b) => b.year - a.year);
}

export function postToLink(post: CollectionEntry<"posts">) {
  return `/posts/${post.id}`;
}
