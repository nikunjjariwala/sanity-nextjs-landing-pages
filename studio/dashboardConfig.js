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
                  buildHookId: '5e80b43db6070e3bc022fb79',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-de2yjhv2',
                  apiId: 'd10121d6-2367-4abf-ae66-d0501ba75106'
                },
                {
                  buildHookId: '5e80b43d20871b46c96477d8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-a4di815p',
                  apiId: '2eefabeb-ec1e-4bd8-b6a1-0b957b2892d6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nikunjjariwala/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-a4di815p.netlify.com', category: 'apps'}
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
