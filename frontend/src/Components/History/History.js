/**
 * History Component
 * 
 * Displays the recent transaction history
 * The component uses the global context to access the transaction history.
 * Each transaction item is displayed with a title, amount, and type (expense/income).
 * 
 * @returns {JSX.Element} JSX element containing the recent transaction history.
 */

import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'

function History() {
    const { transactionHistory } = useGlobalContext()

    // Extracting the history array from transactionHistory
    const [...history] = transactionHistory()

    return (
        <HistoryStyled>
            <h2>Recent History</h2>
            {history.map((item) => {
                const { _id, title, amount, type } = item
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>

                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}`
                            }
                        </p>
                    </div>
                )
            })}
        </HistoryStyled>
    )
}

// Styled component for the history container
const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .history-item{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export default History