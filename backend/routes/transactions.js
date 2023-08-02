// Importing controllers for expenses, incomes, and investments
const { addExpense, getExpense, deleteExpense } = require('../controllers/expense')
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income')
const { addInvestment, getInvestments, deleteInvestment } = require('../controllers/investment')

const router = require('express').Router()

// Define API endpoints for income operations.
router
    .post('/add-income', addIncome)          // Endpoint to add income.
    .get('/get-incomes', getIncomes)        // Endpoint to get all incomes.
    .delete('/delete-income/:id', deleteIncome)  // Endpoint to delete a specific income.

// Define API endpoints for expense operations.
router
    .post('/add-expense', addExpense)           // Endpoint to add an expense.
    .get('/get-expenses', getExpense)           // Endpoint to get all expenses.
    .delete('/delete-expense/:id', deleteExpense)  // Endpoint to delete a specific expense.

// Define API endpoints for investment operations.
router
    .post('/add-investment', addInvestment)         // Endpoint to add an investment.
    .get('/get-investments', getInvestments)        // Endpoint to get all investments.
    .delete('/delete-investment/:id', deleteInvestment)  // Endpoint to delete a specific investment.

module.exports = router