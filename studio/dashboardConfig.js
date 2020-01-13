export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e1ccbcb697bd80186b215e0',
                  title: 'Sanity Studio',
                  name: 'latino-linq-studio-t8n1yw2s',
                  apiId: '767664a0-7719-443c-b982-1b659f82ed8a'
                },
                {
                  buildHookId: '5e1ccbcb86fc05912ab4757b',
                  title: 'Landing pages Website',
                  name: 'latino-linq-web',
                  apiId: '9778ed82-8630-4d50-a601-8c447fe0ab82'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/scottrollan/latino-linq',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://latino-linq-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
