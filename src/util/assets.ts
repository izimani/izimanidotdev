import type { CollectionEntry } from "astro:content";
import type { ImageMetadata } from "astro";

const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/**/*.{jpeg,jpg,png,gif,webp}",
);

async function getImage(basePath: string, relativePath: string) {
  return (await images[basePath + "/" + relativePath])();
}

const Assets = {
  getImage(relativePath: string) {
    return getImage("/src/assets/images", relativePath);
  },
  getProjectImage(relativePath: string) {
    return getImage("/src/assets/images/projects", relativePath);
  },
  getGenericPostImage(relativePath: string) {
    return getImage("/src/assets/images/posts", relativePath);
  },
  getPostImage(post: CollectionEntry<"posts">, relativePath: string) {
    return getImage("/src/assets/images/posts", post.id + "/" + relativePath);
  },
  getStoryImage(relativePath: string) {
    return getImage("/src/assets/images/story", relativePath);
  },
};

export default Assets;
