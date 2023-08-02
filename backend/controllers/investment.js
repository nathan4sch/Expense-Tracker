const InvestmentSchema = require("../models/InvestmentModel")


exports.addInvestment = async (req, res) => {
    const { amount, category, date} = req.body

    const investment = InvestmentSchema({
        amount,
        category,
        date,
    })

    try {
        if (!category || !date) {
            console.log(req.body);
            return res.status(400).json({message: 'All fields are required'})
        }
        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({message: 'Amount must be a positive number'})
        }
        await investment.save()
        res.status(200).json({message: 'Investment Added'})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})

    }

    console.log(investment);
}

//Method for getting all documents
exports.getInvestments = async (req,res) => {
    try {
        const investments = await InvestmentSchema.find().sort({createdAt: -1})
        res.status(200).json(investments)
    } catch (error) {
        res.status(200).json({message: error})
    }

}

exports.deleteInvestment = async (req,res) => {
    const {id} = req.params;
    InvestmentSchema.findByIdAndDelete(id)
        .then((investment) => {
            res.status(200).json({message: 'Investment Deleted'})
        })
        .catch((error) => {
            res.status(500).json({message: 'Server Error'})
        })

}