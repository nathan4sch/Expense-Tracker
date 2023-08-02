/**
 * Controller for handling investment-related operations
 * This module contains functions to handle add, delete, and get operations related to investments.
 * It interacts with the InvestmentModel to perform database operations with MongoDB.
 */

const InvestmentSchema = require("../models/InvestmentModel")

/**
 * Add a new investment
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.addInvestment = async (req, res) => {
    const { amount, category, date } = req.body

    const investment = InvestmentSchema({
        amount,
        category,
        date,
    })

    try {
        // Error handling to ensure all fields are entered
        if (!category || !date) {
            return res.status(400).json({ message: 'All fields are required' })
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({ message: 'Amount must be a positive number' })
        }
        // Save investment data to MongoDB
        await investment.save()
        res.status(200).json({ message: 'Investment Added' })
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })

    }
}

/**
 * Add a new investment
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.getInvestments = async (req, res) => {
    try {
        // Retrieve all incomes from the MongoDB and sort it
        const investments = await InvestmentSchema.find().sort({ createdAt: -1 })
        res.status(200).json(investments)
    } catch (error) {
        res.status(200).json({ message: error })
    }

}

/**
 * Method to get all investments
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.deleteInvestment = async (req, res) => {
    const { id } = req.params;
    InvestmentSchema.findByIdAndDelete(id)
        .then((investment) => {
            res.status(200).json({ message: 'Investment Deleted' })
        })
        .catch((error) => {
            res.status(500).json({ message: 'Server Error' })
        })

}