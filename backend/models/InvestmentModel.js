const mongoose = require('mongoose');

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

module.exports = mongoose.model('Investment', InvestmentSchema)