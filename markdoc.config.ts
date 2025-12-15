import { defineMarkdocConfig, component, nodes } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
  nodes: {
    document: {
      ...nodes.document,
      render: undefined,
    },
    fence: {
      render: component("./src/components/posts/CodeBlock.astro"),
      attributes: {
        ...nodes.fence.attributes,
        content: { type: String, required: true },
        language: { type: String },

        meta: {
          type: String,
          required: false,
        },
        collapse: {
          type: String,
          required: false,
        },
        showLineNumbers: {
          type: Boolean,
          required: false,
        },
        startLineNumber: {
          type: Number,
          required: false,
        },
      },
    },
  },
  tags: {
    aside: {
      render: component("./src/components/posts/Aside.astro"),
      attributes: {},
    },
    figureImage: {
      render: component("./src/components/posts/FigureImage.astro"),
      attributes: {
        src: { type: "String" },
        alt: { type: "String" },
        caption: { type: "String", required: false },
      },
    },
    figureCode: {
      render: component("./src/components/posts/FigureCode.astro"),
      attributes: {
        caption: { type: "String" },
      },
    },
    quote: {
      render: component("./src/components/posts/Quote.astro"),
      attributes: {
        sourceUrl: { type: "String", required: false },
        source: { type: "String", required: false },
        who: { type: "String", required: false },
      },
    },
    storyImageScroller: {
      render: component("./src/components/posts/StoryImageScroller.astro"),
      attributes: {
        title: { type: "String" },
      },
    },
    storyImage: {
      render: component("./src/components/posts/StoryImage.astro"),
      attributes: {
        src: { type: "String" },
        attribution: { type: "String" },
        link: { type: "String", required: false },
      },
    },
    narrowBox: {
      render: component("./src/components/posts/NarrowBox.astro"),
      attributes: {},
    },
  },
});
