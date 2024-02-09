import comp from "C:/Users/lz185/Desktop/vueb/docs/.vuepress/.temp/pages/viteAsset.html.vue"
const data = JSON.parse("{\"path\":\"/viteAsset.html\",\"title\":\"asset handle\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"引用静态资源\",\"slug\":\"引用静态资源\",\"link\":\"#引用静态资源\",\"children\":[]},{\"level\":2,\"title\":\"public目录\",\"slug\":\"public目录\",\"link\":\"#public目录\",\"children\":[]},{\"level\":2,\"title\":\"根url\",\"slug\":\"根url\",\"link\":\"#根url\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"viteAsset.md\"}")
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
