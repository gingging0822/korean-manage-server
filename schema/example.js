//例句
const db = require('./db');
module.exports = db.defineModel('example', {
    //单词
    word: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    //等级
    level: {
        type: DataTypes.INTEGER,
    },
    //example
    partOfSpeech: {
        type: DataTypes.STRING
    },
    //释义
    description: {
        type: DataTypes.STRING
    }
});