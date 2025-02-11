import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    "intro",
    {
      text: "笔记",
      icon: "note",
      prefix: "笔记/",
      children: "structure",
    },
    {
      text: "资源网站",
      icon: "link",
      prefix: "资源网站/",
      children: "structure",
    },
    // "slides",
  ],
});
