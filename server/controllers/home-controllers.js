const Home = require('../models/Home')

module.exports = {
    addHome: (req, res) =>{
        Home.create({
            type: req.body.type,
            homeType: req.body.homeType,
            buildingArea: req.body.buildingArea,
            surfaceArea: req.body.surfaceArea,
            bedroom: req.body.bedroom,
            manyToilet: req.body.manyToilet,
            price: req.body.price,
            specification: req.body.specification,
        })
        .then(response =>{
            res.status(201).json({
                msg: `Succesfully created`,
                data: response
            })
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    findHome: (req, res) =>{
        Home.findById({
            _id: req.params.id
        })
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    editHome: (req, res) =>{
        Home.findByIdAndUpdate({
            _id: req.params.id
        },{
            type: req.body.type,
            homeType: req.body.homeType,
            buildingArea: req.body.buildingArea,
            surfaceArea: req.body.surfaceArea,
            bedroom: req.body.bedroom,
            manyToilet: req.body.manyToilet,
            price: req.body.price,
            specification: req.body.specification,
            // plan: req.body.plan,
            // frontView: req.body.frontView,
        })
        .then(response =>{
            res.status(201).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },
    findAll: (req, res) =>{
        Home.find({})
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    deleteHome: (req, res) =>{
        Home.findByIdAndRemove({
            _id: req.params.id
        })
        .then(response =>{
            res.status(200).json({
                msg: `Succesfully delete`,
                data: response
            })
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    savePlan: (req, res) =>{
        Home.findByIdAndUpdate({
            _id: req.params.id
        },{
            plan: req.body.plan
        })
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    saveFront: (req, res) =>{
        Home.findByIdAndUpdate({
            _id: req.params.id
        },{
            frontView: req.body.frontView
        })
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    }
}