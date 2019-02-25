const express = require('express');
const router = express.Router();
const users = require('./users')
const home = require('./home')
const visitor = require('./visitor')
/* GET home page. */
router.use('/api/users', users)
router.use('/api/home', home)
router.use('/api/visitor', visitor)

module.exports = router;
