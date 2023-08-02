/**
 * Defines the structure of an expense document in the database.
 * Fields include title, amount, type, date, category, and description.
 */

const mongoose = require('mongoose');

// Defining the Expense Schema
const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    amount: {
        type: Number,
        required: true,
        maxLength: 20,
        trim: true,
    },
    type: {
        type: String,
        default: "expense"
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
    description: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
}, { timestamps: true })

// Creating and exporting the Expense model based on the defined schema
module.exports = mongoose.model('Expense', ExpenseSchema)