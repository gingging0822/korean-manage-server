//单词
const db = require('./db');
module.exports = db.defineModel('word', {
    //单词
    word: {
        type: db.STRING,
        allowNull: false,
        primaryKey: true
    },
    //音标
    phoneticSymbol: {
        type: db.STRING
    },
    //等级
    level: {
        type: db.STRING
    },
    //释义
    description: {
        type: db.STRING
    },
    //背景图
    backgroundImage: {
        type: db.STRING
    },
    //音频
    voice: {
        type: db.STRING
    },
    //固定搭配
    fixedMatch: {
        type: db.STRING,
        get() {
            return JSON.parse(this.getDataValue('fixedMatch'));
        }
    }
});

///require schema
//module.exports
//User.hasMany(Note);
//Note.belongsTo(User);

//相关词尝试是否能自己和自己多对多
//Note.belongsToMany(Tag, {'through': Tagging});
//Tag.belongsToMany(Note, {'through': Tagging});