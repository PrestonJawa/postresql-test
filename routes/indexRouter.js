const { Router } = require('express')
const indexController = require('../controllers/indexController')

const indexRouter = Router()

indexRouter.get('/', indexController.homeGet)
indexRouter.get('/new', indexController.newGet)
indexRouter.post('/new', indexController.newPost)

module.exports = indexRouter