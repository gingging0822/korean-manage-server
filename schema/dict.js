//字典
const db = require('./db');
module.exports = db.defineModel('dict', {
    //key
    key: {
        type: db.STRING,
    },
    //value
    value: {
        type: db.STRING
    }
});