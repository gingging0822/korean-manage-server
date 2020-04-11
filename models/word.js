const model = require('./model');

let Word = model.Word;
let Example = model.Example;

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