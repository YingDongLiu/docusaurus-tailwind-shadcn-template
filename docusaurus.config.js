// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'liu-apps',
  tagline: 'Templates Docusaurus with Tailwind CSS and Shadcn/ui',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'namnguyenthanhwork', // Usually your GitHub org/user name.
  projectName: 'docusaurus-tailwind-shadcn-template', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization configuration
  i18n: { 
    defaultLocale: 'en', 
    locales: ['en', 'zh', 'ja'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      zh: {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
        calendar: 'gregory',
        path: 'zh',
      },
      ja: {
        label: '日本語',
        direction: 'ltr',
        htmlLang: 'ja-JP',
        calendar: 'gregory',
        path: 'ja',
      },
    },
  },

  // Enable Docusaurs Faster: https://github.com/facebook/docusaurus/issues/10556
  future: { experimental_faster: true },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: false
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'liu-apps',
        logo: { alt: 'liu-apps Logo', src: 'img/logo.svg' },
        items: [
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            'href': 'https://www.apple.com/legal/internet-services/itunes/us/terms.html',
            'position': 'right',
            'label': 'Terms'
          },
          {
            'to': '/privacy-policy',
            'position': 'right',
            'label': 'Privacy Policy'
          }
        ]
      },
      docs: { sidebar: { autoCollapseCategories: true, hideable: true } },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Support',
            items: [
              {
                label: 'Terms',
                href: 'https://www.apple.com/legal/internet-services/itunes/us/terms.html'
              },
              { 
                label: 'Cookie Policy', 
                href: '/cookie-policy' 
              }
            ]
          },
          {
            title: 'Resources',
            items: [
              { 
                label: 'FAQ', 
                href: '/faq' 
              },
              { 
                label: 'App Store', 
                href: 'https://apps.apple.com/us/developer/yingdong-liu/id1706285656' 
              }
            ]
          },
          {
            title: 'Explore',
            items: [
              { 
                label: 'Home', 
                to: '/' 
              },
              { 
                label: 'About', 
                to: '/about' 
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} All rights reserved | Yingdongliu`
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false
      },
      prism: {
        additionalLanguages: ['bash', 'json']
      }
    }),

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexPages: true,
        indexBlog: true,
        indexDocs: false,
        hashed: true,
        language: ['en', 'zh', 'ja'],
        highlightSearchTermsOnTargetPage: false,
        searchResultContextMaxLength: 50,
        searchResultLimits: 8,
        searchBarShortcut: true,
        searchBarShortcutHint: true,
        blogRouteBasePath: '/'
      }
    ]
  ],
  plugins: [
    ['./src/plugins/tailwind-config.js', {}],
    [
      'ideal-image',
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      ({
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        // Use false to debug, but it incurs huge perf costs
        disableInDev: true
      })
    ],
    [
      './src/plugins/blog-plugin',
      {
        path: 'blog',
        editLocalizedFiles: false,
        blogTitle: 'Tiny apps, quiet revolutions.',
        blogDescription: 'One home for all my apps—downloads, release notes, and behind-the-scenes stories.',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'List blog',
        routeBasePath: '/',
        include: ['**/*.md', '**/*.mdx'],
        exclude: [
          '**/_*.{js,jsx,ts,tsx,md,mdx}',
          '**/_*/**',
          '**/*.test.{js,jsx,ts,tsx}',
          '**/__tests__/**'
        ],
        postsPerPage: 6,
        truncateMarker: /<!--\s*(truncate)\s*-->/,
        showReadingTime: true,
        onUntruncatedBlogPosts: 'ignore',
        // Remove this to remove the "edit this page" links.
        editUrl:
          'https://github.com/namnguyenthanhwork/docusaurus-tailwind-shadcn-template/tree/main/',
        remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]]
      }
    ]
  ]
}

export default config
