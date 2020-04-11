//单词释义
const db = require('./db');
module.exports = db.defineModel('meaning', {
    //单词
    word: {
        type: db.STRING,
        allowNull: false,
        primaryKey: true
    },
    //序号
    itemNo: {
        type: db.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    //词性
    partOfSpeech: {
        type: db.STRING
    },
    //对应字
    correspondWord: {
        type: db.STRING
    },
    //释义
    description: {
        type: db.STRING
    }
});