const express = require('express');
const router = express.Router();
const {isLogin} = require('../middlewares/auth')
const {signin, signup, getUser} = require('../controllers/user-controllers')

router.post('/signin', signin)
router.post('/signup', signup)
router.get('/', isLogin, getUser)

module.exports = router;
