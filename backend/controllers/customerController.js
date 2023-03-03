const Customer = require('../models/customerModel')

// get all workouts

// get a single workout

// create new workout
const createCustomer = async (req, res) => {
    const {name, surname, number} = req.body
    
    // add doc to db
    try {
	    const customer = await Workout.create({name, surname, number})
	    res.status(200).json(customer)
	} catch (error) {
	    res.status(400).json({error: error.message})
    }
}
// delete a new workout

// update a workout

module.exports = {
	createCustomer
}