//相关词
const db = require('./db');
module.exports = db.defineModel('related', {
    //单词
    word: {
        type: db.STRING,
        allowNull: false,
        primaryKey: true
    },
    //相关词
    relatedWord: {
        type: db.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    //词性
    partOfSpeech: {
        type: db.STRING
    },
    //释义
    description: {
        type: db.STRING
    },
    //相关词词性
    relatedPartOfSpeech: {
        type: db.STRING
    },
    //相关词释义
    relatedDescription: {
        type: db.STRING
    }
});