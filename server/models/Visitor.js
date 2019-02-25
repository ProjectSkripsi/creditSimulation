const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const visitorSchema = new Schema({
    name: String,
    address: String,
    contact: String,
    email: String,
    income: Number,
    tanggungan: Number,
    tenor: Number,
    statusKredit: String,
    deleteAt:{
        type: Date,
        default: null
    }
},{
    timestamps: true
})

const Visitor = mongoose.model('Visitor', visitorSchema)
module.exports = Visitor