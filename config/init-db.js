const model = require('../models/model.js');
model.sync();

console.log('init db ok.');
process.exit(0);