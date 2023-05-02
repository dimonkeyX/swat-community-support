import { path } from '@vuepress/utils'
//import { defaultTheme } from '@vuepress/theme-default'
import { defaultTheme } from 'vuepress'

// Plugins
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { gitPlugin } from '@vuepress/plugin-git'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

// SEE: https://v2.vuepress.vuejs.org/reference/default-theme/config.html#config
module.exports = {
  // Site Config: https://v2.vuepress.vuejs.org/reference/config.html#site-config
  lang: 'en-GB',
  title: 'SWAT 4 Documentation',
  description: 'A community created site to help you work around problems caused by the end various services, such as GameSpy, that limit how you can play SWAT 4.',
  repo: 'dimonkeyX/swat4-community-docs',
  base: 'swat4-community-docs',


  // https://v2.vuepress.vuejs.org/reference/default-theme/config.html
  theme: defaultTheme({
    logo: '/images/logo-light.png',
    logoDark: '/images/logo-dark.png',
    
    // https://v2.vuepress.vuejs.org/reference/default-theme/config.html#sidebar
    
      sidebar: { 
        //'': [{text: 'Home', children: ['/guides/README.md','/reference/README.md']}],

        '/guides/': [
          {
            text: 'Guides',
            children: ['/guides/new-to-swat-4.md', '/guides/getting-started.md'],
          },
        ],
        '/reference/': [
          {
            text: 'Reference',
            children: ['/reference/game-admin-commands.md', '/reference/server-admin-commands.md'],
          },
        ],
      },

    //https://v2.vuepress.vuejs.org/reference/default-theme/config.html#navbar
    
      navbar: [
        // NavbarItem
        { text: 'SWAT 4 Servers',
          link: 'https://swat4stats.com/servers/',
        },
        {
          text: 'SWAT 4 Stats',
          link: 'https://www.swat4stats.com',
        },
        // NavbarGroup
        {
          text: 'About',
          children: ['about.md', 'contributing.md'],
        },
      ],


  }),

  plugins: [
    // https://v2.vuepress.vuejs.org/reference/plugin/register-components.html
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    }),

    // https://v2.vuepress.vuejs.org/reference/plugin/search.html#search
    searchPlugin({
      // getExtraFields: (page) => page.frontmatter.tags,
      maxSuggestions: 15,
      hotKeys: ['s', '/'],
      locales: {
        '/': {
          placeholder: 'Search',
        }
      }
    }),

    gitPlugin({
        // options
      }),
    
    backToTopPlugin(),
  ],
} 