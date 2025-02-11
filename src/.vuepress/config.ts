import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);
console.log(__dirname, '__dirname');

export default defineUserConfig({
  base: "/",
  lang: "zh",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "AlorzBlog-记录知识与生活",
      description: "",
    },
  },
  theme,
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue"
    ),
  },
  // Enable it with pwa
  // shouldPrefetch: false,
});
