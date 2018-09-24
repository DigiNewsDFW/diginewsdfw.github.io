const path = require('path');
const { renderFile } = require('@mjstahl/boring');

module.exports = (filepath, data) => renderFile(path.resolve(filepath), data);
