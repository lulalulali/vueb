import comp from "C:/Users/lz185/Desktop/vueb/docs/.vuepress/.temp/pages/task.html.vue"
const data = JSON.parse("{\"path\":\"/task.html\",\"title\":\"作业要求\",\"lang\":\"en-US\",\"frontmatter\":{\"sidebar\":\"auto\"},\"headers\":[{\"level\":2,\"title\":\"阅读文档\",\"slug\":\"阅读文档\",\"link\":\"#阅读文档\",\"children\":[]},{\"level\":2,\"title\":\"网站要求左侧菜单要有目录和子目录\",\"slug\":\"网站要求左侧菜单要有目录和子目录\",\"link\":\"#网站要求左侧菜单要有目录和子目录\",\"children\":[]},{\"level\":2,\"title\":\"一点不懂的\",\"slug\":\"一点不懂的\",\"link\":\"#一点不懂的\",\"children\":[]}],\"git\":{\"updatedTime\":1707465924000,\"contributors\":[{\"name\":\"lulalulali\",\"email\":\"117624486+lulalulali@users.noreply.github.com\",\"commits\":1}]},\"filePathRelative\":\"task.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
