import type { ImageMetadata } from "astro";

const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/images/*.{jpeg,jpg,png,gif,webp}",
);

const Assets = {
  async getImage(relativePath: string) {
    console.log(images);
    return (await images["/src/assets/images/" + relativePath])();
  },
};

export default Assets;
