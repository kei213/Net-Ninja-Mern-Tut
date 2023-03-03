const mongoose = require('mongoose')

const Schema = mongoose.Schema

const customerSchema = new Schema({
    name:{
    	type: String,
    	required: true
    },
    surname:{
    	type: Number,
    	required: true
    },
    phoneNumber:{
    	type: Number,
    	required: true
    },
    transactions:{
        type: Array,
    }
}, { timestamps: true })

module.exports = mongoose.model('Customer', customerSchema)