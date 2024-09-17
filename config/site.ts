export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "liukatkat",
  description: "welcome to my little spot on the internet!",
  navItems: [
    {
      label: "home",
      href: "/",
    },
    {
      label: "about me",
      href: "/aboutme",
    },
    {
      label: "projects",
      href: "/projects",
    },
    // {
    //   label: "blog",
    //   href: "/blog",
    // },
    // {
    //   label: "about",
    //   href: "/about",
    // },
  ],
  navMenuItems: [
    {
      label: "home",
      href: "/",
    },
    {
      label: "about me",
      href: "/aboutme",
    },
    {
      label: "projects",
      href: "/projects",
    },
  ],
  links: {
    github: "https://github.com/liukatkat",
    linkedin: "https://www.linkedin.com/in/liukatkat/",
    instagram: "https://www.instagram.com/liukatkat/",
  },
};
