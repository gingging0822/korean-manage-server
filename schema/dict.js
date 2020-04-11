/**
├── schema
    └── dict.js
*/
//例句
const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('dict', {
        //序列
        sequence: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        //key
        key: {
            type: DataTypes.STRING,
        },
        //value
        value: {
            type: DataTypes.STRING
        }

    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true
    })
}