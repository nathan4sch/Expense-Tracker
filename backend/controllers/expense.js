/**
 * Expense Controller Module
 * This module contains functions to handle add, delete, and get operations related to expenses.
 * It interacts with the ExpenseModel to perform database operations with MongoDB.
 */

const ExpenseSchema = require("../models/ExpenseModel")

/**
 * Adds a new expense to the database
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body

    const income = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date,
    })

    try {
        // Error handling for missing fields
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields are required' })
        }
        // Error handling for invalid amount
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({ message: 'Amount must be a positive number' })
        }
        // Save the expense to the database, MongoDB
        await income.save()
        res.status(200).json({ message: 'Expense Added' })
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })

    }

    console.log(income);
}

/**
 * Method for getting all documents
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.getExpense = async (req, res) => {
    try {
        // Fetching all expenses from the database and sorting them by creation date
        const incomes = await ExpenseSchema.find().sort({ createdAt: -1 })
        // Sending back the list of expenses
        res.status(200).json(incomes)
    } catch (error) {
        res.status(200).json({ message: 'server Error' })
    }

}

/**
 * This function deletes an expense from the database with the given ID 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
exports.deleteExpense = async (req, res) => {
    const { id } = req.params;
    // Find the expense with given id and delete it
    ExpenseSchema.findByIdAndDelete(id)
        // Sending success or error respoinse
        .then((income) => {
            res.status(200).json({ message: 'Expense Deleted' })
        })
        .catch((error) => {
            res.status(500).json({ message: 'Server Error' })
        })

}