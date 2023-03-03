const express = require('express')
const { createCustomer } = require('../controllers/customerController')

const router = express.Router()

// get all customers
router.get('/', (req, res) => {
    res.json({mssg: 'Get all customers'})
})

// get a single customer
router.get('/:id', (req, res) => {
    res.json({mssg: `Get a single customer: ${req.id}`})
})

//Post a new customer
router.post('/', createCustomer)

//Delete a customer
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a customer'})
})

//Update a customer
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update a customer'})
})


module.exports = router