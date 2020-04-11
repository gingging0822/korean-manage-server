/**
├── schema
    └── related.js
*/
//相关词
const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('related', {
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
        },

    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true
    })
}