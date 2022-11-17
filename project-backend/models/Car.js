const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CarModel = new Schema({

    Photo: {type: String, required: true},
    Brand: {type: String, required: true},
    Year:  {type: String, required: true},
    Price: {type: String, required: true},
    Description: {type: String, required: true},
    Contact: {type: String, required: true},

}, {
    timestamps: true
})
const Car = mongoose.model('Car' , CarModel)

module.exports = Car;