const fs = require('fs').promises;
const path = require('path');

module.exports = async () => {
  const images = await fs.readdir(path.resolve('src/images'));
  return Promise.all(
    images.map(image =>
      fs.copyFile(path.resolve(`src/images/${image}`), path.resolve(`images/${image}`))
    )
  );
};
