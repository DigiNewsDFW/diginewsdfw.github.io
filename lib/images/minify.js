const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

module.exports = (matches, output) => imagemin(matches, output, {
  plugins: [
    imageminJpegtran(),
    imageminPngquant({quality: '65-80'})
  ]
});
