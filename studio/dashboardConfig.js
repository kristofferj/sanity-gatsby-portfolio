export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              sites: [
                {
                  buildHookId: '5ccc2a72b8f23f3f6b3f1aea',
                  name: 'Content Studio',
                  siteId: '9f7926b7-4e17-4d2b-b7d2-dad9cd011876'
                },
                {
                  buildHookId: '5ccc2aec9727a50270340c78',
                  name: 'Portfolio Website',
                  siteId: 'bed2a05c-d7cb-4d56-b907-bfa09578f689'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kristofferj/sanity-gatsby-portfolio',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-k86w8fn8.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent projects', order: '_createdAt desc', types: ['project'] },
      layout: { width: 'medium' }
    }
  ]
};
