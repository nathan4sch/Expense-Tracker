/**
 * Dashboard Component for main page of application
 * 
 * This component represents the main dashboard screen displaying all transactions and financial stats. It utilizes React and Styled Components for styling.
 * The component includes a chart section showing income and expense trends, and a history section displaying the minimum and maximum income and expense values.
 * It also calculates and displays the total income, total expenses, total balance, and total savings.
 */

import React, { useEffect } from 'react'
import { styled } from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import Chart from '../Chart/Chart';
import { GlobalProvider, useGlobalContext } from '../../context/globalContext';
import { dollar } from '../../utils/Icons';
import History from '../History/History';

function Dashboard() {
  const { totalExpenses, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses, totalInvestments, getInvestments } = useGlobalContext()

  // Fetch income and expense data
  useEffect(() => {
    getIncomes()
    getExpenses()
    getInvestments()
  }, [])

  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>All Transactions</h1>
        <div className="stats-con">
          <div className="chart-con">
            <GlobalProvider><Chart /></GlobalProvider> {/* Render the Chart component inside GlobalProvider*/}
            <div className="amount-con">
              {/* Display total income, total expenses, total balance, and total savings by calling their respective functions from GlobalContext */}
              <div className="income">
                <h2>Total Income</h2>
                <p>
                  {dollar}{totalIncome()}
                </p>
              </div>
              <div className="expense">
                <h2>Total Expense</h2>
                <p>
                  {dollar} -{totalExpenses()}
                </p>
              </div>
              <div className="balance">
                <h2>Total Balance</h2>
                <p>
                  {dollar} {totalBalance()}
                </p>
              </div>
              <div className="investment">
                <h2>Total Savings</h2>
                <p>
                  {dollar} {totalInvestments()}
                </p>
              </div>
            </div>
          </div>
          <div className="history-con">
            <History /> {/* Render the History component */}
            <h2 className="salary-title">Min <span>Salary</span>Max</h2>
            <div className="salary-item">
              <p>
                ${Math.min(...incomes.map(item => item.amount))} {/* Calculate and display minimum income */}
              </p>
              <p>
                ${Math.max(...incomes.map(item => item.amount))} {/* Calculate and display maximum income */}
              </p>
            </div>
            <h2 className="salary-title">Min <span>Expense</span>Max</h2>
            <div className="salary-item">
              <p>
                ${Math.min(...expenses.map(item => item.amount))} {/* Calculate and display minimum expense */}
              </p>
              <p>
                ${Math.max(...expenses.map(item => item.amount))} {/* Calculate and display maximum expense */}
              </p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`
    .stats-con{
        /* Creates grid layout of 5 columns */
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con{
            /* Have the chart be located in the first three columns of the grid */
            grid-column: 1 / 4;
            height: 400px;
            .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
                .income, .expense{
                    grid-column: span 2;
                }
                .income, .expense, .balance, .investment{
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    p{
                        font-size: 3.5rem;
                        font-weight: 700;
                    }
                }
                .balance, .investment{
                    grid-column: span 2;
                }
                /* Styles for income container text */
                .income{
                    p{
                        color: var(--color-green);
                        opacity: 0.6;
                        font-size: 4.5rem;
                    }
                }
                /* Styles for expense container text */
                .expense{
                    p{
                        color: red;
                        opacity: 0.6;
                        font-size: 4.5rem;
                    }
                }
                /* Styles for balance container text */
                .balance{
                    p{
                        color: var(--color-green);
                        opacity: 0.6;
                        font-size: 4.5rem;
                    }
                }
                /* Styles for investment container text */
                .investment{
                  p{
                        color: dodgerblue;
                        opacity: 0.6;
                        font-size: 4.5rem;
                    }
                }
            }
        }

        .history-con{
            /* The history container will be located from 
            column four to the last remaining column */
            grid-column: 4 / -1;
            h2{
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .salary-title{
                font-size: 1.2rem;
                span{
                    font-size: 1.8rem;
                }
            }
            .salary-item{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
        }
    }
`;

export default Dashboard