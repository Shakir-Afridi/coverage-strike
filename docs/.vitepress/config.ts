import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Coverage Strike',
  description: 'AI-powered mutation testing library for JavaScript and TypeScript',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'CLI', link: '/cli/' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Coverage Strike?', link: '/guide/' },
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Installation', link: '/guide/installation' }
        ]
      },
      {
        text: 'Usage',
        items: [
          { text: 'CLI Commands', link: '/cli/' },
          { text: 'Configuration', link: '/guide/configuration' },
          { text: 'AI Integration', link: '/guide/ai-integration' }
        ]
      },
      {
        text: 'API Reference',
        items: [
          { text: 'Analyzer', link: '/api/analyzer' },
          { text: 'Mutators', link: '/api/mutators' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Shakir-Afridi/coverage-strike' }
    ]
  }
})
