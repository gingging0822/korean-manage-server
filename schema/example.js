//例句
const db = require('./db');
module.exports = db.defineModel('example', {
    //单词
    word: {
        type: db.STRING,
        allowNull: false,
        primaryKey: true
    },
    //等级
    level: {
        type: db.INTEGER,
    },
    //example
    partOfSpeech: {
        type: db.STRING
    },
    //释义
    description: {
        type: db.STRING
    }
});