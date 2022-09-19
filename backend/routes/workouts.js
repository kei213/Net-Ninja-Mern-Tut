const express = require('express')

const router = express.Router()

// get all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'Get all workouts'})
})

// get a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: `Get a single workout: ${req.id}`})
})

//Post a new workout
router.post('/', (req, res) => {
    res.json({mssg: 'Post a new workout'})
})

//Delete a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a workout'})
})

//Update a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update a workout'})
})


module.exports = router