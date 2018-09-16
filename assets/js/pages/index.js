import articles from '../data/articles.js';

const { format, parse } = dateFns;

const featured = articles.find(article => article.featured);
featured.displayDate = format(featured.date, 'MMMM D, YYYY, hh:mm aa');

const recent = articles
  .sort((a, b) => parse(a.date) < parse(b.date))
  .slice(0, 5)
  .map(article => {
    return {
      ...article,
      month: format(article.date, 'MMM'),
      day: format(article.date, 'D')
    };
  });

new Vue({
  el: '#page-wrapper',
  data: {
    featured,
    recent
  }
});
