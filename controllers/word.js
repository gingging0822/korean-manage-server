/**
├── controllers
    └── word.js
*/
const wordModel = require('../models/word')
class WordController {
    /**
     * 查询单词
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async getByWord(ctx) {
        // 接收客服端
        let req = ctx.params.word;
        if (req) {
            try {
                // 查询改单词
                const ret = await wordModel.getByWord(req);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '查询成功',
                    data
                }

            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 200,
                    msg: '查询失败',
                    data: err
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                msg: '参数不齐全',
            }
        }
    }
    /**
     * 创建单词
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async createWord(ctx) {
        let word = JSON.parse( ctx.request.body);
        if (word) {
            try {
                // 创建用户
                word.fixedMatch = JSON.stringify(word.fixedMatch);
                const ret = await wordModel.createWord(word);
                //返回新创建的用户信息
                const data = await wordModel.getByWord(word.word);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '创建成功',
                    data
                }

            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 200,
                    msg: '创建失败',
                    data: err
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                msg: '参数不齐全',
            }
        }
        }
}
module.exports = WordController