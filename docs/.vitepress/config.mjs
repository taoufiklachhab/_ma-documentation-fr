// docs/.vitepress/config.mjs
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "le-cours",
  description: "c est mon cours",
  base: '/_ma-documentation-fr/',  // ← À AJOUTER (nom de votre dépôt GitHub)
  
  themeConfig: {
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Exemples', link: '/markdown-examples' },
      { text: 'Taufik', link: '/taufik' },
      { text: 'Lachhab', link: '/lachhab' }
    ],

    sidebar: [
      {
        text: 'Documentation',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'Accueil', link: '/' },
          { text: 'Exemples Markdown', link: '/markdown-examples' },
          { text: 'Exemples API', link: '/api-examples' }
        ]
      },
      {
        text: 'Étudiants',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Taufik', link: '/taufik' },
          { text: 'Lachhab', link: '/lachhab' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    
    footer: {
      message: 'Documentation le-cours',
      copyright: 'Copyright © 2026'
    }
  }
})