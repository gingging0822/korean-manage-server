/**
├── schema
    └── example-schema.js
*/
//例句
const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('example', {
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
        },

    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true
    })
}