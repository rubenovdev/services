const express = require('express')
const router = express.Router()
const controller = require('../controllers/main')

router.get('/', controller.getNote)
router.patch('/:id', controller.update)
router.delete('/:id', controller.delete)
router.get('/:id', controller.getById)

module.exports = router;