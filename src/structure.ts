export type Page = {
  href: string;
  navTitle: string;
};

export const PAGES = {
  HOME: {
    href: "/",
    navTitle: "home",
  },
  SHORTS: {
    href: "/shorts",
    navTitle: "shorts",
  },
  POSTS: {
    href: "/posts",
    navTitle: "posts",
  },
  PROJECTS: {
    href: "/projects",
    navTitle: "projects",
  },
  STORY: {
    href: "/story",
    navTitle: "story",
  },
  CONTACT: {
    href: "/contact",
    navTitle: "contact",
  },
};

export const PAGES_LIST: Page[] = [
  PAGES.HOME,
  PAGES.SHORTS,
  PAGES.POSTS,
  PAGES.PROJECTS,
  PAGES.STORY,
  PAGES.CONTACT,
];
