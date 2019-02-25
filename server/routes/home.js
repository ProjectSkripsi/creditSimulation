const express = require('express')
const router = express.Router()
const upload = require('../helpers/picture')
const {addHome, savePlan, saveFront, findHome, editHome, findAll, deleteHome} = require('../controllers/home-controllers')

router.post('/', addHome)
router.get('/:id', findHome)
router.put('/:id', editHome)
router.get('/', findAll)
router.delete('/:id', deleteHome)
router.patch('/plan/:id', savePlan)
router.patch('/front/:id', saveFront)

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