const express = require('express')
const { 
	createWorkout,
	getWorkouts,
	getWorkout } = require('../controllers/workoutController')

const router = express.Router()

// get all workouts
router.get('/', getWorkouts)

// get a single workout
router.get('/:id', getWorkout)

//Post a new workout
router.post('/', createWorkout)

//Delete a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a workout'})
})

//Update a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update a workout'})
})


module.exports = router