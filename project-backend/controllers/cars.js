// import the Model to communicate with the database 
const Car = require('../models/Car')

async function getAllCars(req,res) {
    const allCars = await Car.find()
    res.json(allCars)
}

async function createCar(req,res) {
    console.log('Req Body! ', req.body) 

    Car.create(req.body)
    .then(newCar => res.json(newCar))
    .catch(err => res.json(err)) 
}

async function deleteCar(req,res) {
    try {
        await Tweet.findByIdAndDelete(
            req.params._id
        )
        res.json({message: 'Car Deleted Successfully'})
    } catch (err) {
        res.json(err)
    }
}

async function getCar(req,res) {
    try {
        const car = await Car.findById(req.params._id)
        res.json(car)
    } catch (err) {
        res.json(err)
    }
}

async function getCarsByCategory(req,res) {

    const carsList = await Car.find({
        Brand: req.params.Brand
    })


    res.json(carsList)
}

// Exporting functions
module.exports = {
    getCarsByCategory,
    getAllCars,
    getCar,
    createCar,
    deleteCar
}
