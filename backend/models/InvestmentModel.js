/**
 * Defines the structure of an expense document in the database.
 * Fields include amount, type, date, and category
 */

const mongoose = require('mongoose');

// Defining the Investment Schema
const InvestmentSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
        maxLength: 20,
        trim: true,
    },
    type: {
        type: String,
        default: "investment"
    },
    date: {
        type: Date,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
}, {timestamps: true})

// Creating and exporting the Investment model based on the defined schema
module.exports = mongoose.model('Investment', InvestmentSchema)