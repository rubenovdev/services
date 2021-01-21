const express = require('express')
const router = express.Router()
const controller = require('../controllers/archive')

router.get('/', controller.getArchive)

module.exports = router;
