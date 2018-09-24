const fs = require('fs').promises;

const renderFile = require('./renderFile');

const index = async (guid, recent, { page, title, author, description, image, displayDate }) => {
  const body = await renderFile('src/views/index.html', {
    featured: {
      page,
      title,
      author,
      displayDate,
      image,
      description,
    },
    guid
  });

  const doc = await renderFile('src/views/_document.html', {
    head: {
      title: 'DigiNews DFW',
      image: 'https://diginewsdfw.com/images/header.jpg',
      description: 'Technology, startup and business news in Dallas-Fort Worth',
      updatedAt: new Date().toISOString(),
      page: 'https://diginewsdfw.com',
      type: 'website',
      guid
    },
    body,
    recent: {
      articles: recent
    }
  });

  return fs.writeFile('index.html', doc);
};

module.exports = index;
