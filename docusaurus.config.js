module.exports = {
  title: 'AraCred',
  tagline: 'Aragon + SourceCred',
  url: 'https://aracred.github.io',
  baseUrl: '/website/',
  favicon: 'img/favicon.ico',
  organizationName: 'aracred', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'AraCred',
      logo: {
        alt: 'AraCred Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/aracred',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/aracred/aracred',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Info',
          items: [
            {
              label: '🗺️ Overview',
              to: 'docs/aracred',
            },
            {
              label: '💸 Tokeneconomics',
              to: 'docs/design-goals',
            },
            {
              label: '🚀 Deployment',
              to: 'docs/deoployment-overview',
            },
          ],
        },
        {
          title: 'Contribute',
          items: [
            {
              label: '💡 Share ideas',
              href: 'https://discord.gg/nG4Ew2Y',
            },
            {
              label: '💻 Lay down code',
              href: 'https://github.com/aracred',
            },
          ],
        },
        {
          title: 'Friends & Family',
          items: [
            {
              label: '🦅 Aragon',
              href: 'https://aragon.org/',
            },
            {
              label: '🌱 SourceCred',
              href: 'https://sourcecred.io/',
            },
            {
              label: '🐙 MetaGame',
              href: 'https://metagame.wtf/',
            }
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/aracred/website/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
