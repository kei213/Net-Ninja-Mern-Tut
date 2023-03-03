const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')
// get all workouts
const getWorkouts = async (req, res) => {
	// we get all workouts and sort by created date in descending order
	const workouts = await Workout.find({}).sort({createdAt: -1})
	res.status(200).json(workouts)
}

// get a single workout
const getWorkout = async (req, res) => {
	// get a single workout using its id received from req.params
	const { id } = req.params
	const workout = await Workout.findById(id)
	if (!mongoose.Types.ObjectId.isValid(id)) {
		// check if the id is valid
		return rest.status(404).json({error: 'No such workout'})
	}
	if (!workout) {
		// return is used because we dont want to continue with the rest of the code
		return res.status(404).json({error:'No such workout'})
	}

	res.status(200).json(workout)

}

// create new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body
    
    // add doc to db
    try {
	    const workout = await Workout.create({title, load, reps})
	    res.status(200).json(workout)
	} catch (error) {
	    res.status(400).json({error: error.message})
    }
}
// delete a new workout

// update a workout

module.exports = {
	getWorkouts,
	getWorkout,
	createWorkout
}