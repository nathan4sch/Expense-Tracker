import React, { useContext, useState } from "react"
import axios from 'axios'

// Defines the base URL for API calls
const BASE_URL = "http://localhost:4000/api/v1/";

// Create a context to share state and functions with components
const GlobalContext = React.createContext()

export const GlobalProvider = ({ children }) => {


    // State variables to hold incomes, expenses, and investments
    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [investments, setInvestments] = useState([])
    const [error, setError] = useState(null)


    // Income Functions
    //Function to add income data
    const addIncome = async (income) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
            .catch((err) => {
                setError(err.response.data.message)
            })
        getIncomes()

    }

    // Retrieves all income records
    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data)
    }

    // Deletes an income record by ID
    const deleteIncome = async (id) => {
        const res = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncomes()
    }

    // Calculates and returns total income
    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) => {
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    // Expense Functions
    // Adds expense data
    const addExpense = async (expense) => {
        const response = await axios.post(`${BASE_URL}add-expense`, expense)
            .catch((err) => {
                setError(err.response.data.message)
            })
        getExpenses()
    }

    // Gets all expense data
    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data)
        console.log(response.data)
    }

    // Deletes an expense record by ID
    const deleteExpense = async (id) => {
        const res = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpenses()
    }

    //Calculates and returns  total expenses
    const totalExpenses = () => {
        let totalExpense = 0;
        expenses.forEach((expense) => {
            totalExpense = totalExpense + expense.amount
        })

        return totalExpense;
    }


    // Investment Functions
    // Add investment data to database and then retrieve data for investments
    const addInvestment = async (investment) => {
        const response = await axios.post(`${BASE_URL}add-investment`, investment)
            .catch((err) => {
                setError(err.response.data.message)
            })
        getInvestments()
    }

    // Retrieves all investment data
    const getInvestments = async () => {
        const response = await axios.get(`${BASE_URL}get-investments`)
        setInvestments(response.data)
        console.log(response.data)
    }

    // Deletes an investment by id
    const deleteInvestment = async (id) => {
        const response = await axios.delete(`${BASE_URL}delete-investment/${id}`)
        getInvestments()
    }

    // Returns total of all investments
    const totalInvestments = () => {
        let totalInvestments = 0;
        investments.forEach((investment) => {
            totalInvestments = totalInvestments + investment.amount
        })

        return totalInvestments;
    }

    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    // Gets transaction history sorted by date
    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        // Only shows the three most recent transactions
        return history.slice(0, 3)
    }

    // Provide the context value to child components
    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            investments,
            addInvestment,
            getInvestments,
            deleteInvestment,
            totalInvestments,
            totalBalance,
            transactionHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

// Custom hook to access the GlobalContext
export const useGlobalContext = () => {
    return useContext(GlobalContext)
}