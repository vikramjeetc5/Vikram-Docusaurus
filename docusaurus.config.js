// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'E-Commerce Product Catalog API',
  tagline: 'Create, filter, sort, and paginate products with a simple REST API',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  // Replace with your real address after you deploy
  url: 'https://your-site-name.onrender.com',
  baseUrl: '/',

  // Replace with your GitHub user name and repository name
  organizationName: 'Vikramjeet Chawla',
  projectName: 'Vikram-Docusaurus',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Product Catalog API',
        logo: {
          alt: 'Product Catalog API logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://vikram-swaggerui.onrender.com',
            label: 'Swagger UI',
            position: 'right',
          },
          {
            href: 'https://github.com/vikramjeetc5',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {label: 'Documentation', to: '/docs/intro'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'Swagger UI', href: 'https://vikram-swaggerui.onrender.com'},
              {label: 'GitHub', href: 'https://github.com/vikramjeetc5'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Vikramjeet Chawla. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;