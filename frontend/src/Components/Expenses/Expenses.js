/**
 * Expense Component
 * 
 * This code represents a React component for the Expenses page
 * It displays a list of expenses and a form to add new expenses
 * The expenses are fetched and managed using the globalContext provided by the application.
 */

import React, { useEffect } from 'react'
import { styled } from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from './ExpenseForm';

/**
 * Component representing the Expenses page.
 * Displays a list of expenses and a form to add new expenses.
 */
function Expenses() {
  // Destructure data used from globalContext
  const { addIncome, expenses, getExpenses, deleteExpense, totalExpenses } = useGlobalContext()

  useEffect(() => {
    getExpenses()

  }, [])

  return (
    <ExpenseStyled>
      <InnerLayout>
        <h1>Expenses</h1>
        <h2 className="total-income">Total Expenses: <span>-${totalExpenses()}</span></h2>
        <div className="income-content">
          <div className="form-container">
            <ExpenseForm />
          </div>
          <div className="incomes">
            {/* Map through expenses and render IncomeItem for each expense */}
            {expenses.map((income) => {
              const { _id, title, amount, date, category, description, type } = income;
              return <IncomeItem
                key={_id}
                id={_id}
                title={title}
                description={description}
                amount={amount}
                date={date}
                type={type}
                category={category}
                indicatorColor="red"
                deleteItem={deleteExpense}
              />
            })}
          </div>

        </div>
      </InnerLayout>
    </ExpenseStyled>
  )
}

const ExpenseStyled = styled.div`
    display: flex;
    overflow: auto;
    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: red;
        }
    }
    .income-content{
        display: flex;
        gap: 2rem;
        .incomes{
            flex: 1;
        }
    }
`;

export default Expenses