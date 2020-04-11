//相关词
const db = require('./db');
module.exports = db.defineModel('example', {
    //单词
    word: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    //相关词
    relatedWord: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    //词性
    partOfSpeech: {
        type: DataTypes.STRING
    },
    //释义
    description: {
        type: DataTypes.STRING
    },
    //相关词词性
    relatedPartOfSpeech: {
        type: DataTypes.STRING
    },
    //相关词释义
    relatedDescription: {
        type: DataTypes.STRING
    }
});