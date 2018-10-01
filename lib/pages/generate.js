const guid = require('shortid')();
const { parse, format } = require('date-fns');

const generateIndex = require('./_index');
const generateArticles = require('./_articles');

const articles = require('../../src/data/articles').map(article => ({
  ...article,
  day: format(article.date, 'D'),
  month: format(article.date, 'MMM'),
  year: format(article.date, 'YYYY'),
  displayDate: format(article.date, 'MMMM D, YYYY, h:mm aa')
}));

const featured = articles.find(article => article.featured);
const recent = articles.sort((a, b) => parse(a.date) < parse(b.date) ? 1 : -1).slice(0, 5);

module.exports = () => Promise.all([
  generateIndex(guid, recent, featured),
  generateArticles(guid, recent, articles)
]);
