const router = require('koa-router')()
const WordController = require('../controllers/word')
router.get('/word/:word', WordController.getByWord)

router.post('/word', WordController.createWord)

module.exports = router