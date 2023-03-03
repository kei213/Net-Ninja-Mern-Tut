require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workoutRoutes')
const customerRoutes = require('./routes/customerRoutes')
// express app
const app = express()


// middleware
app.use(express.json())

app.use((req, res, next) => {
	// prints to the console the path and method of every request
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/customers', customerRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
    	// listen for requests
		app.listen(process.env.PORT, () => {
		    console.log('connected to MongoDb & listening 0n 3000')
		})
    })
    .catch((error) => {
    	console.log(error)
    })



