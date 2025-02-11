import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "笔记",
    icon: "edit",
    prefix: "/笔记/",
    children: [
      // {
      //   text: "前端开发框架",
      //   icon: "edit",
      //   link: "vue/",
      //   children: [
      //     { text: "VUEJS", icon: "edit", link: "guide" },
      //   ],
      // },
      {
        text: "正则表达式",
        icon: "edit",
        prefix: "正则表达式/",
        children: [
          { text: "常用正则表达式", icon: "edit", link: "常用正则" },
        ],
      },
      {
        text: "uniapp",
        icon: "edit",
        prefix: "uniapp/",
        children: [
          { text: "页面返回传参", icon: "edit", link: "页面返回传参" },
        ],
      },
      {
        text: "MarkDown",
        icon: "edit",
        prefix: "markdown/",
        children: [
          { text: "基础语法", icon: "edit", link: "基础语法" },
        ],
      },
      {
        text: "Vuepress",
        icon: "edit",
        prefix: "vuepress/",
        children: [
          {
            text: 'Hope主题',
            icon: "edit",
            link: 'theme/hope/blog'
          }
        ]
      },
      {
        text: "Nginx",
        icon: "edit",
        prefix: "nginx/",
        children: [
          {
            text: '站点刷新404',
            icon: "edit",
            link: '站点刷新404'
          }
        ]
      },
    ]
  },
  {
    text: "资源网站",
    icon: "link",
    prefix: "/资源网站/",
    children: [
      {
        text: '图片壁纸',
        icon: 'link',
        link: '美图壁纸'
      }
    ]
  }
]);
