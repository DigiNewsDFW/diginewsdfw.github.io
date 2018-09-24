const fs = require('fs').promises;
const path = require('path');
const { parse } = require('date-fns');

const renderFile = require('./renderFile');

const index = async (guid, recent, articles) => {
  const body = await renderFile('src/views/articles.html', {
    articles,
    guid
  });

  const doc = await renderFile('src/views/_document.html', {
    head: {
      title: 'DigiNews DFW',
      image: 'https://diginewsdfw.com/images/header.jpg',
      description: 'Technology, startup and business news in Dallas-Fort Worth',
      updatedAt: new Date().toISOString(),
      page: 'https://diginewsdfw.com/articles',
      type: 'website',
      guid
    },
    body,
    recent: {
      articles: recent
    }
  });

  return fs.writeFile('articles/index.html', doc);
};

individualPages = async (guid, recent, articles) => {
  const files = await fs.readdir(path.resolve('src/articles'));

  const createArticlePages = files.map(async file => {
    const article = articles.find(a => a.page === file);

    const body = await renderFile(`src/articles/${file}`, {
      ...article,
      guid
    });

    const doc = await renderFile('src/views/_document.html', {
      head: {
        title: article.title,
        image: `https://diginewsdfw.com/images/${article.image}`,
        description: article.blurb,
        updatedAt: parse(article.date).toISOString(),
        page: `https://diginewsdfw.com/articles/${article.page}`,
        type: 'article',
        guid
      },
      body,
      recent: {
        articles: recent
      }
    });

    return fs.writeFile(`articles/${article.page}`, doc);
  });

  return Promise.all(createArticlePages);
};

const articles = (...args) => {
  return Promise.all([index(...args), individualPages(...args)]);
};

module.exports = articles;
