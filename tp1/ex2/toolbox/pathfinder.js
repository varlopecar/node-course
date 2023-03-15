const fs = require('fs');

const file = process.argv[1];

const path = fs.readFile(path.resolve(__dirname, file), 'UTF-8', callback);

module.exports = path;
