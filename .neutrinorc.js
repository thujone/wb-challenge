module.exports = {
  use: [
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'Carousel Demo',
          links: [
            {
              href: 'https://fonts.googleapis.com/css?family=Prosto+One|Fira+Sans+Extra+Condensed',
              rel: 'stylesheet'
            }
          ]
        }
      }
    ],
    '@neutrinojs/jest'
  ]
};

