import articles from '../data/articles.js';

const { format, parse } = dateFns;

articles
  .sort((a, b) => parse(a.date) < parse(b.date))
  .forEach(article => article.displayDate = format(article.date, 'MMMM D, YYYY, hh:mm aa'));

new Vue({
  el: '#page-wrapper',
  data: {
    articles
  }
});
