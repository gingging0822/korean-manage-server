//单词释义
const db = require('./db');
module.exports = db.defineModel('example', {
    //单词
    word: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    //序号
    itemNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    //词性
    partOfSpeech: {
        type: DataTypes.STRING
    },
    //对应字
    correspondWord: {
        type: DataTypes.STRING
    },
    //释义
    description: {
        type: DataTypes.STRING
    }
});