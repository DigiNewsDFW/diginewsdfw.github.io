const { spawn, exec } = require('child_process');
const path = require('path');

module.exports = (pixelsWH, match) => {
  return new Promise((resolve, reject) => {
    const images = path.resolve('./images');
    exec(`sips -Z 1300 ${images}/*`, e => {
      if (e) reject(e);
      else resolve();
    });
  });
};
