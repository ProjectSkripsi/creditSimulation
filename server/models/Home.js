const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const homeSchema = new Schema({
    type: String,
    homeType: String,
    buildingArea: String,
    surfaceArea: String,
    bedroom: String,
    manyToilet: String,
    price: Number,
    specification: String,
    plan: String,
    frontView: String,
    deleteAt: {
        type: Date,
        default: null
    }
},{
    timestamps: true
})

const Home = mongoose.model('Home', homeSchema);
module.exports = Home