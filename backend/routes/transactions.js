const { addIncome, getIncomes, deleteIncome } = require('../controllers/income')

const router = require('express').Router()

//if we get this endpoint then post
router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete('/delete-income/:id', deleteIncome)


module.exports = router