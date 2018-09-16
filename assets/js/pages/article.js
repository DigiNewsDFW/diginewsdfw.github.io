import articles from '../data/articles.js';
import meta from '../util/meta.js';

const { format, parse } = dateFns;

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

const current = articles.find(({ page }) => window.location.pathname.includes(page));

new Vue({
  el: '#page-wrapper',
  metaInfo: meta(current),
  data: {
    recent
  }
});
