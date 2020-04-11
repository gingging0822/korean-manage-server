/**
├── models
    └── user.js
*/

// 引入刚刚在第五点建立连接mysql数据库的db.js文件
const db = require('../config/db');
// 引入Sequelize对象
const Sequelize = db.sequelize;
// 引入上一步的用户数据表模型文件
const Word = Sequelize.import('../schema/word');
const Example = Sequelize.import('../schema/example');
// 自动创建表
Word.sync({ force: false });
Example.sync({ force: false });
class WordModel {
    /**
     * 创建单词模型
     * @param data
     * @returns {Promise<*>}
     */
    static async createWord(word) {
        var item = await Word.create(word);
        word.example.word = word.word
        var s = await Example.create(word.example);
        return item;
    }
    /**
     * 查询单词详情数据
     * @param word  单词
     * @returns {Promise<Model>}
     */
    static async getByWord(word) {
        let item = await Word.findOne({ where: { word } });

        // let list = Word.associate = function (models) {
        //     models.Word.belongsTo(models.Example, {
        //         foreignKey: 'word',
        //         targetKey: 'word',
        //         constraints: false,
        //     })
        // }
        return item;
    }
    /**
     * 查询单词列表
     * @param id  单词
     * @returns {Promise<Model>}
     */
    static async getBylevel(level) {
        if (level)
            return await Word.findAll({ where: { level } });
        else
            return await Word.findAll();
    }
}
module.exports = WordModel