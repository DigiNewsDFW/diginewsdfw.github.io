const { minify, resize, copy } = require('./images');
const { generate } = require('./pages');

module.exports = {
  async generate () {
    await generate();
    await copy();
    await resize('1300', 'images/*');
    await minify(['images/*.{jpg,png}'], 'images');
  }
};
