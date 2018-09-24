const { spawn, exec } = require('child_process');
const path = require('path');

module.exports = (pixelsWH, match) => {
  return new Promise((resolve, reject) => {
    exec('sips -Z 1300 /Users/Espirit/Projects/airedale/images/*', e => {
      if (e) reject(e);
      else resolve();
    });
  });
};
