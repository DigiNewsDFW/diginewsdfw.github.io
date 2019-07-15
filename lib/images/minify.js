const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

module.exports = (matches, destination) => imagemin(matches, {
  destination,
  plugins: [
    imageminJpegtran(),
    imageminPngquant({ quality: [.65, .8] })
  ]
});
