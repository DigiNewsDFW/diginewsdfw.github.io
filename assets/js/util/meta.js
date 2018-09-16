const { format, parse } = dateFns;

export default ({ title, date, image, author, page, blurb }) => () => ({
  titleTemplate: 'DigiNews DFW: %s',
  title,
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
    { name: 'description', content: 'Technology, startup and business news in Dallas-Fort Worth' },
    { name: 'image', content: `https://diginewsdfw.com/images/header.jpg` },

    { property: 'og:url', content: `https://diginewsdfw.com/articles/${page}` },
    { property: 'og:title', content: title },
    { property: 'og:description', content: blurb },
    { property: 'og:image', content: `https://diginewsdfw.com/images/${image}` },
    { property: 'og:updated_time', content: parse(date).toISOString() },
    { property: 'og:type', content: 'article' },

    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: '@danielledigest' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: blurb },
    { name: 'twitter:image', content: `https://diginewsdfw.com/images/${image}` }
  ],
  script: [
    { type: 'application/ld+json', innerHTML: '[{"@context":"http://schema.org","@type":"WebSite","url":"https://diginewsdfw.com","name":"DigiNews DFW"}]' }
  ]
});
