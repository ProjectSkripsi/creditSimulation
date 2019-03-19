const Visitor = require('../models/Visitor')

module.exports = {
    addVisitor: (req, res) =>{
        Visitor.create({
            name: req.body.name,
            address: req.body.address,
            contact: req.body.contact,
            email: req.body.email,
            income: req.body.income,
            tanggungan: req.body.tanggungan,
            tenor: req.body.tenor,
            statusKredit: req.body.statusKredit
        })
        .then(response =>{
            res.status(201).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    findVisitor: (req, res) =>{
        Visitor.find({})
        .then(response =>{
            res.status(201).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    deleteVisitor: (req, res) =>{
        Visitor.findByIdAndRemove({
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

    findOneVisitor: (req, res) =>{
        Visitor.findById({
            _id: req.params.id
        })
        .then(response =>{
            res.status(201).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    calcSimulasi: (req, res) =>{
        Visitor.findOneAndUpdate({
            _id: req.params.id
        },{
            c1: req.body.c1,
            c2: req.body.c2,
            c3: req.body.c3,
            c4: req.body.c4,
            total: req.body.total,
        })
        .then(response =>{
            res.status(201).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    getVisitor: (req, res) =>{
        Visitor.findById({
            _id: req.params.id
        })
        .then(response =>{
            res.status(201).json(response)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

}