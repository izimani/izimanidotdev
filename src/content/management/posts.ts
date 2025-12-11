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

  return groupPostsByYear(posts);
}

export async function getGroupedLivePostsInCategory(
  category: string,
): Promise<PostsGroupedByYear[]> {
  const posts = await getSortedLivePosts();

  const postsInCategory = posts.filter((p) =>
    p.data.categories.includes(category),
  );

  return groupPostsByYear(postsInCategory);
}

export function postToLink(post: CollectionEntry<"posts">) {
  return `/posts/${post.id}`;
}

export async function getPostCategories(): Promise<string[]> {
  const posts = await getSortedLivePosts();

  const categorySet = new Set<string>();
  for (const post of posts) {
    for (const category of post.data.categories) {
      categorySet.add(category);
    }
  }

  return Array.from(categorySet);
}

function groupPostsByYear(
  posts: CollectionEntry<"posts">[],
): PostsGroupedByYear[] {
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
