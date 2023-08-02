/**
 * Income Controller Module
 * This module contains functions to handle add, delete, and get operations related to incomes.
 * It interacts with the IncomeModel to perform database operations with MongoDB.
 */

const IncomeSchema = require("../models/IncomeModel")

/**
 * Add income to the database.
 * @param {Object} req - The request object containing the income details in the body.
 * @param {Object} res - The response object to send the result back to the client.
 */
exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body

    // Create a new IncomeSchema instance with the provided data
    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date,
    })

    try {
        // Error handling to check all required fields are provided
        if (!title || !category || !description || !date) {
            console.log(req.body);
            return res.status(400).json({ message: 'All fields are required' })
        }
        // Error handling to ensure amount is a positive/valid number
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({ message: 'Amount must be a positive number' })
        }

        // Save income to MongoDB
        await income.save()
        res.status(200).json({ message: 'Income Added' })
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })

    }
}

/**
 * Get all sorted income records from the database
 * @param {Object} req - The request object
 * @param {Object} res - The response object to send back the retrieved incomes
 */
exports.getIncomes = async (req, res) => {
    try {
        // Retrieve all incomes from the database and sort it
        const incomes = await IncomeSchema.find().sort({ createdAt: -1 })
        res.status(200).json(incomes)
    } catch (error) {
        res.status(200).json({ message: error })
    }

}

/**
 * Delete an income record from the database specified by the ID
 * @param {Object} req - The request object containing the income ID as a URL parameter.
 * @param {Object} res - The response object
 */
exports.deleteIncome = async (req, res) => {
    const { id } = req.params;
    IncomeSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({ message: 'Income Deleted' })
        })
        .catch((error) => {
            res.status(500).json({ message: 'Server Error' })
        })

}