const express = require('express')
const router = express.Router()
const controller = require('../controllers/add')

router.post('/', controller.createNote)


module.exports = router
