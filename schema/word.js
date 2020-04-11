/**
├── schema
    └── word.js
*/
//单词

///require schema
//module.exports
//User.hasMany(Note);
//Note.belongsTo(User);

//相关词尝试是否能自己和自己多对多
//Note.belongsToMany(Tag, {'through': Tagging});
//Tag.belongsToMany(Note, {'through': Tagging});

const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('word', {
        //单词
        word: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        //音标
        phoneticSymbol: {
            type: DataTypes.STRING
        },
        //等级
        level: {
            type: DataTypes.STRING
        },
        //释义
        description: {
            type: DataTypes.STRING
        },
        //背景图
        backgroundImage: {
            type: DataTypes.STRING
        },
        //音频
        voice: {
            type: DataTypes.STRING
        },
        //固定搭配
        fixedMatch: {
            type: DataTypes.STRING(2000),
            get() {
            return JSON.parse(this.getDataValue('fixedMatch'));
            }
        }
    }, {
        //如果为true，则将所有camelCased列转换为下划线
        underscored: true,
        //如果为true，则将camelCased模型名称转换为带下划线的表名
        underscoredAll: true,
        freezeTableName: true
    })
}