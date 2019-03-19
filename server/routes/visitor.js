const express = require('express')
const router = express.Router()
const {isLogin} = require('../middlewares/auth')
const {addVisitor, findVisitor, deleteVisitor, findOneVisitor, calcSimulasi, getVisitor} = require('../controllers/visitor-controllers')

router.get('/result/:id', getVisitor)
router.post('/', addVisitor)
router.get('/', isLogin, findVisitor)
router.delete('/:id', isLogin, deleteVisitor)
router.get('/:id', isLogin, findOneVisitor)
router.put('/:id', calcSimulasi)

module.exports = router