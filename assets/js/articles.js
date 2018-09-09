import articles from './data/articles.js';

const { format, parse } = dateFns;

articles
  .sort((a, b) => parse(a.date) < parse(b.date))
  .forEach(article => article.date = format(article.date, 'MMM D, YYYY'));

new Vue({
  el: '#page-wrapper',
  data: {
    articles
  }
});
