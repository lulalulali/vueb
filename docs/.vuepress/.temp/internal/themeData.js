export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"myNote\",\"link\":\"/nodejs.md\"},{\"text\":\"Task\",\"link\":\"/task.md\"},{\"text\":\"Git\",\"link\":\"/git.md\"},{\"text\":\"Cli\",\"link\":\"/cli.md\"},{\"text\":\"Nonclass\",\"link\":\"/nonclass.md\"},{\"text\":\"*\",\"children\":[\"/domain.md\",\"/task.md\"]}],\"sidebar\":[{\"text\":\"Frontend\",\"link\":\"\",\"children\":[{\"text\":\"\",\"link\":\"\",\"children\":[]}]},{\"text\":\"Backend\"},{\"text\":\"Node\",\"collapsible\":true,\"children\":[{\"text\":\"nodejs\",\"link\":\"/nodejs.md\"},{\"text\":\"npm\",\"link\":\"/npm.md\"}]},{\"text\":\"Express\",\"children\":[{\"text\":\"\",\"link\":\"/\"},{\"text\":\"\",\"link\":\"/\"}]},{\"text\":\"Framework\"},{\"text\":\"Vite\",\"collapsible\":true,\"children\":[{\"text\":\"viteTheme\",\"link\":\"/viteTheme.md\"},{\"text\":\"viteConfigset\",\"link\":\"/viteConfigset.md\"},{\"text\":\"viteSidebar\",\"link\":\"/viteSidebar.md\"},{\"text\":\"viteRoute\",\"link\":\"/viteRoute.md\"},{\"text\":\"viteAsset\",\"link\":\"/viteAsset.md\"},{\"text\":\"viteFrontmatter\",\"link\":\"/viteFrontmatter.md\"},{\"text\":\"viteMdextension\",\"link\":\"/viteMdextension.md\"},{\"text\":\"viteApi\",\"link\":\"/viteApi.md\"},{\"text\":\"viteHooks\",\"link\":\"/viteHooks.md\"},{\"text\":\"viteError\",\"link\":\"/viteError.md\"}]},{\"text\":\"Vue\",\"collapsible\":true,\"children\":[\"/vue/vue.md\",\"/vue/vueMd.md\"]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
