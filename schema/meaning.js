/**
├── schema
    └── meaning.js
*/
//单词释义
const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('meaning', {
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
        },

    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true
    })
}