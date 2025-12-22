---
layout: "../layouts/MarkdownLayout.astro"
title: "Colophon"
description: "A look under the hood."
---

## Technologies and techniques used

The current version of the site is built upon the following tech:

- [Astro](https://astro.build/)
  - Content-driven, mostly static sites are a pleasure to build with Astro. It’s type-safe, fast, has a large community, and includes patterns for making maintainable webpages.
- [Markdoc](https://markdoc.dev/)
  - Markdown is my go-to format when authoring content, but it has its limitations. For example, I needed a way to add asides or code listings with captions. Markdoc adds just enough expressive power to solve such problems elegantly.
- [Fontsource](https://fontsource.org/)
  - To avoid relying on Google Fonts.
- [Astro OG Canvas](https://fontsource.org/)
  - It’s not as gangsta as you’d think, as OG stands for Open Graph. Nevertheless, this Astro add-on is extremely valuable, as it makes generating Open Graph images for posts (and every other page, of course) effortless.
- Modern CSS
  - I’ve tried to make extensive use of relatively modern CSS features such as [nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Nesting) (with a shout-out to [nested media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Nesting/At-rules#nesting_media_at-rule)), the [`light-dark()` function](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/light-dark), or the [`:is` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:is). I know this isn't a big deal, but I’m coming from the backend, so I’m just getting up to speed with CSS.
- Semantic HTML
  - It’s all too easy to solve everything with `divs` and `spans` while ignoring gems like `hgroup` or `mark`. I’ve tried to get it right and looked up semantically correct HTML elements, whenever possible.

If the tech stack above changes, you’ll find links to previous versions here.

Of course, technology alone can only take you so far. Here are all the tips, tricks, and techniques I used when building this site:

- Light/Dark Theme Switch
  - [Native HTML light and dark color scheme switching](https://pepelsbey.dev/articles/native-light-dark/) by Vadim Makeev
  - [light-dark() isn't always the same as prefers-color-scheme](https://www.stefanjudis.com/today-i-learned/light-dark-isnt-the-same-as-prefers-color-scheme/) by Stefan Judis
- Markdoc Code Blocks
  - [Replacing the Shiki integration with Expressive Code in a Astro-Markdoc setup](https://www.anca.wtf/posts/how-to-replace-a-plain-shiki-integration-with-expressive-code-in-your-astro-markdoc-setup/) by Anca
- Reading Time
  - [Adding reading time to Astro without the hassle](https://jahir.dev/blog/astro-reading-time) by Jahir Fiquitiva
- Open Graph Images
  - [Creating dynamic OG images in Astro](https://www.hellobala.co/blog/creating-dynamic-og-images-in-astro) by Balázs Barta
- Accessibility and Semantic HTML
  - [The article element](https://heydonworks.com/article/the-article-element/) (and others in the series) by Heydon Pickering
  - [Semantics, what does it mean?](https://www.erikkroes.nl/blog/semantics-what-does-it-mean/) by Erik Kroes
  - [The A11Y Project](https://www.a11yproject.com/)
  - [Inclusive Design Principles](https://inclusivedesignprinciples.info/)
- CSS Reset
  - [A Modern CSS Reset](https://www.joshwcomeau.com/css/custom-css-reset/) by Josh Comeau

A few books I used for guidance:

- [Laws of UX](https://lawsofux.com/book/) by Jon Yablonski
- [Universal Principles of Typography](https://elliotjaystocks.com/books) by Elliot Jay Stocks
- [Writing for Developers](https://www.manning.com/books/writing-for-developers) by Piotr Sarna and Cynthia Dunlop

## Technologies avoided (anti-colophon)

When building the site, I deliberately avoided the following tech:

- Active server-side components.
  - I wanted a lean, performant, and cheap-to-host site. That’s why I avoided active server-side components (whether traditional servers or serverless) and went with a static site generation (SSG).
- Front-end frameworks and excessive JavaScript use.
  - "Surely you didn’t need client-side JS; this is a personal site!" you might think. And that’s right, a content-driven site like this one shouldn’t ship with megs and megs of JS. However, you add a little script here and there, one little dependency for this feature, and another one for something different, and boom, your visitors spend seconds downloading scripts. Not on my site!
- Tailwind.
  - In the past two years, I’ve grown so close to Tailwind that I've barely used vanilla CSS at all. I felt that using utility-class-only styling alienated me from bog-standard CSS. For this site, I wanted to go back to the roots.
- Tracking.
  - I’m not interested in numbers; I write for my own self-expression and to help and inspire individuals. Please get in touch with me if you find anything exciting on this site!

## Inspiration

This site was shaped by the endless list of personal pages and blogs I’ve come across throughout my career. A few of them, however, stand out:

- The [stream](https://stream.thesephist.com) format of [TheSephist](https://thesephist.com) (Linus Lee).
- The [article layout](https://evanhahn.com/pyodide-relative-imports/) and the [monthly notes](https://evanhahn.com/notes-from-november-2025/) format of [Evan Hahn](https://evanhahn.com/).
- The [post listing](https://ruudvanasseldonk.com/writing/) of [Ruud van Asseldonk](https://ruudvanasseldonk.com/).
- The front page of Dimitri Sabadie's site, [Strongly Typed Thoughts](https://strongly-typed-thoughts.net/).
