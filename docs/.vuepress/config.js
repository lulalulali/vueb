import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import next from 'next'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      // NavbarItem
      {
        text: 'myNote',
        link: '/nodejs.md',
      },
      {
        text: 'Task',
        link: '/task.md',
      },
      {
        text: 'Git',
        link: '/git.md',
      },
      {
        text: 'Cli',
        link: '/cli.md',
      },
      {
        text: 'Nonclass',
        link: '/nonclass.md',
      },
      {
        text: '*',
        children: ['/domain.md', '/task.md'],
      },
    ],
    sidebar: [
      {
        text: 'Frontend',
        link: '',
        children: [
          {
            text: '',
            link: '',
            children: [],
          }
        ],
      },
      { text: 'Backend' },
      {
         text: 'Node',
         collapsible:true,
          children: [
          {
            text: 'nodejs',
            link: '/nodejs.md',
          },
          {
            text: 'npm',
            link: '/npm.md',
          }
        ],
      },
      {
        text: 'Express',
        children: [
          {
            text: '',
            link: '/',
          },
          {
            text: '',
            link: '/',
          }
        ],
      },
      { text: 'Framework' },
      {
        text: 'Vite',
        collapsible:true,
       children: [
         {
           text: 'viteTheme',
           link: '/viteTheme.md',
         },
         {
          text: 'viteConfigset',
          link: '/viteConfigset.md',
        }, {
          text: 'viteSidebar',
          link: '/viteSidebar.md',
        }, {
          text: 'viteRoute',
          link: '/viteRoute.md',
        }, {
          text: 'viteAsset',
          link: '/viteAsset.md',
        }, {
          text: 'viteFrontmatter',
          link: '/viteFrontmatter.md',
        }, {
          text: 'viteMdextension',
          link: '/viteMdextension.md',
        }, {
          text: 'viteApi',
          link: '/viteApi.md',
        },
        {
          text: 'viteHooks',
          link: '/viteHooks.md',
        },
         {
           text: 'viteError',
           link: '/viteError.md',
         }
       ],              
     },
     {
      text:'Vue' ,
       collapsible:true,
       children: ['/vue/vue.md','/vue/vueMd.md'  ]
     }

    ],
  })
})
