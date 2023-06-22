require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workoutRoutes')

// express app
const app = express()
const PORT = process.env.PORT || 3000 

// middleware
app.use(express.json())

app.use((req, res, next) => {
	// prints to the console the path and method of every request
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRoutes)

// home route
app.get('/', (req, res) => {
    const currentDate = new Date();
  res.send(`netninja-merntut: ${currentDate}`);
})

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
    	// listen for requests
		app.listen(PORT, '0.0.0.0', () => {
		    console.log(`connected to MongoDb & listening 0n ${PORT} `)
		})
    })
    .catch((error) => {
    	console.log(error)
    })



