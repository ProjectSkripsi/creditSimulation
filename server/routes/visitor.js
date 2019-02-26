const express = require('express')
const router = express.Router()
const {isLogin} = require('../middlewares/auth')
const {addVisitor, findVisitor, deleteVisitor, findOneVisitor} = require('../controllers/visitor-controllers')

router.post('/', addVisitor)
router.get('/', isLogin, findVisitor)
router.delete('/:id', isLogin, deleteVisitor)
router.get('/:id', isLogin, findOneVisitor)

module.exports = router