const express = require('express')
const router = express.Router()
const {addVisitor, findVisitor, deleteVisitor, findOneVisitor} = require('../controllers/visitor-controllers')

router.post('/', addVisitor)
router.get('/', findVisitor)
router.delete('/:id', deleteVisitor)
router.get('/:id', findOneVisitor)

module.exports = router