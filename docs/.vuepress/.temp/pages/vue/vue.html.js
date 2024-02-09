import comp from "C:/Users/lz185/Desktop/vueb/docs/.vuepress/.temp/pages/vue/vue.html.vue"
const data = JSON.parse("{\"path\":\"/vue/vue.html\",\"title\":\"vue\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"简介\",\"slug\":\"简介\",\"link\":\"#简介\",\"children\":[]}],\"git\":{\"updatedTime\":1707465924000,\"contributors\":[{\"name\":\"lulalulali\",\"email\":\"117624486+lulalulali@users.noreply.github.com\",\"commits\":1}]},\"filePathRelative\":\"vue/vue.md\"}")
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
