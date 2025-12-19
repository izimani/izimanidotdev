---
layout: "../layouts/MarkdownLayout.astro"
title: "Colophon"
description: "A look under the hood."
---

## Technologies and techniques used

The current version of the site is built upon the following tech:

- Astro
  - Content-driven, mostly static sites are a pleasure to build with Astro. It’s type-safe, fast, has a large community, and includes patterns for making maintainable webpages.
- Markdoc
  - Markdown is my go-to format when authoring content, but it has its limitations. For example, I needed a way to add asides or code listings with captions. Markdoc adds just enough expressive power to solve such problems elegantly.
- Fontsource
- To avoid relying on Google Fonts.
- Astro OG Canvas
  - It’s not as gangsta as you’d think, as OG stands for Open Graph. Nevertheless, this Astro add-on is extremely valuable, as it makes generating Open Graph images for posts (and every other page, of course) effortless.
- Modern CSS
  - I’ve tried to make extensive use of relatively modern CSS features such as [nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Nesting) (with a shout-out to [nested media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Nesting/At-rules#nesting_media_at-rule)), the [`light-dark()` function](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/light-dark), or the [`:is` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:is). I know this isn't a big deal, but I’m coming from the backend, so I’m just getting up to speed with CSS.

If the tech stack changes, you’ll find links to previous versions below.

## Technologies avoided

When building the site, I deliberately avoided the following tech:

- Dsa.

## Inspiration

This site was shaped by the endless list of personal pages and blogs I’ve come across throughout my career. A few of them, however, stand out:

- The [stream](https://stream.thesephist.com) format of [TheSephist](https://thesephist.com) (Linus Lee).
- The [article layout](https://evanhahn.com/pyodide-relative-imports/) and the [monthly notes](https://evanhahn.com/notes-from-november-2025/) format of [Evan Hahn](https://evanhahn.com/).
- The [post listing](https://ruudvanasseldonk.com/writing/) of [Ruud van Asseldonk](https://ruudvanasseldonk.com/).
- The front page of Dimitri Sabadie's site, [Strongly Typed Thoughts](https://strongly-typed-thoughts.net/).
