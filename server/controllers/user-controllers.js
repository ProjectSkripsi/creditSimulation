const User = require('../models/User')
const hash = require('../helpers/hash')

module.exports = {
    signin: (req, res) => {
        let username = req.body.username
        let password = req.body.password
        User.findOne({ username: username })
        .then(result => {
            if(hash.decode(password, result.password)) {
                res.status(200).json({
                    err: false,
                    msg: `Succesfully Login`,
                    user: result.username,
                    role: result.role,
                    token: hash.jwtEncode({
                        id: result._id,
                        username: result.username,
                        role: result.role,
                    })
                })
            } else {
                res.status(400).json({
                    message: "Password is wrong",
                    data: err
                })
            }
        })
        .catch(err => {
            console.log(`sadsadsa`,err);
            res.status(500).json({
                err: err,
                msg: `Not Register`
            })
        })
    },

    signup: (req, res) => {
        let username = req.body.username
        let password = req.body.password
        User.find({ username: username })
        .then(result => {
            if (result.length === 0) {
                User.create({
                        username,
                        password
                    })
                    .then(newUser => {
                        res.status(201).json({
                            err: false,
                            message: `Success to add ${newUser.username}`,
                            data: newUser,
                        })
                    })
                    .catch(err => {
                        res.status(500).json({
                            message: `Please input name & password incorrect`
                        })
                    })
            } else {
                res.status(400).json({
                    message: 'username already registered!'
                })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
    },

    getUser : (req, res) =>{
        User.findById({
            _id: req.decoded.id
        })
        .then(result =>{
            let user = {
                user: result.username,
                _id: result._id,
                roles: result.roles
            }
            res.status(200).json(user)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },
}