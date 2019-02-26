const express = require('express')
const router = express.Router()
const upload = require('../helpers/picture')
const {isLogin} = require('../middlewares/auth')
const {addHome, savePlan, saveFront, findHome, editHome, findAll, deleteHome} = require('../controllers/home-controllers')

router.post('/', isLogin, addHome)
router.get('/:id', isLogin, findHome)
router.put('/:id', isLogin, editHome)
router.get('/', findAll)
router.delete('/:id', isLogin, deleteHome)
router.patch('/plan/:id', isLogin, savePlan)
router.patch('/front/:id', isLogin, saveFront)

router.post('/upload',
    upload.multer.single('image'), 
    upload.sendUploadToGCS,
    (req, res) => {
        res.send({
        status: 200,
        message: 'Your file is successfully uploaded',
        link: req.file.cloudStoragePublicUrl
    })
})



module.exports = router