const fs = require('fs');
const db = require('../schema/db');
const Sequelize = require('sequelize');
const dbConfig = require('../config/config');

let files = fs.readdirSync(__dirname + '/../schema/');

let js_files = files.filter((f) => {
    return f != 'db.js' && f.endsWith('.js');
}, files);

module.exports = {};

for (let f of js_files) {
    console.log(`import model from file ${f}...`);
    let name = f.substring(0, f.length - 3);
    // let model = sequelize.import(__dirname + '/../schema/' + f);
    // module.exports[name] = model
    // module.exports[name].sync();

    module.exports[name] = require(__dirname + '/../schema/' + f)
    module.exports[name].sync({ force: false });
}