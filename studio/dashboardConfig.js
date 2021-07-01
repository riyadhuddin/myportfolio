export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60ddc57661cc051b61f63cee',
                  title: 'Sanity Studio',
                  name: 'myportfolio-studio-33se48dp',
                  apiId: '16295efd-1e44-41e4-b95a-48d8af2394fd'
                },
                {
                  buildHookId: '60ddc57660e84f00dc759feb',
                  title: 'Portfolio Website',
                  name: 'myportfolio-web-wrjtqq9z',
                  apiId: 'dcc72dfc-f74a-4323-926b-d1e27e994071'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/riyadhuddin/myportfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://myportfolio-web-wrjtqq9z.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
