//字典表
const db = require('./db');
module.exports = db.defineModel('example', {
    //key
    key: {
        type: DataTypes.STRING,
    },
    //value
    value: {
        type: DataTypes.STRING
    }
});