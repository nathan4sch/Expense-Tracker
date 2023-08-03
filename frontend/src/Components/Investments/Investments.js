/**
 * Investment Component
 * 
 * Displays a list of investments and savings
 * Fetches initial data and renders an InvestmentForm and InvestmentItem components for each investment
 */

import React, { useEffect } from 'react'
import { styled } from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import InvestmentForm from './InvestmentForm';
import InvestmentItem from './InvestmentItem';

function Investments() {
  const { addInvestment, investments, getInvestments, deleteInvestment, totalInvestments } = useGlobalContext()

  // Updates the investments for the intial render
  useEffect(() => {
    getInvestments()
  }, [])

  return (
    <InvestmentsStyled>
      <InnerLayout>
        <h1>Investments and Savings</h1>
        <h2 className="total-investment">Total Investments and Savings: <span>${totalInvestments()}</span></h2>
        <div className="investment-content">
          <div className="form-container">
            <InvestmentForm></InvestmentForm>
          </div>
          <div className="investments">
            {/* Maps through each investment created and returns it*/}
            {investments.map((investment) => {
              const { _id, amount, date, category, type } = investment;
              return <InvestmentItem
                key={_id}
                id={_id}
                amount={amount}
                date={date}
                type={type}
                category={category}
                indicatorColor='linear-gradient(180deg, #66A3FF 0%, #007BFF 100%);'
                deleteItem={deleteInvestment}
              />
            })}
          </div>

        </div>
      </InnerLayout>
    </InvestmentsStyled>
  )
}

const InvestmentsStyled = styled.div`
display: flex;
overflow: auto;
.total-investment{
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
        color: cornflowerblue
    }
}
.investment-content{
    display: flex;
    gap: 2rem;
    .investments{
        flex: 1;
    }
}
`;

export default Investments