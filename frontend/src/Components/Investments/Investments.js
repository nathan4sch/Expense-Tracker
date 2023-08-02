import React, { useEffect } from 'react'
import { styled } from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import InvestmentForm from './InvestmentForm';
import InvestmentItem from './InvestmentItem';

function Investments() {
  const { addInvestment, investments, getInvestments, deleteInvestment, totalInvestments } = useGlobalContext()

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
            
          </div>
          <div className="investments">
            {investments.map((investment) => {
              const { _id, amount, date, category, type } = investment;
              return <InvestmentItem
                key={_id}
                id={_id}
                amount={amount}
                date={date}
                type={type}
                category={category}
                indicatorColor="var(--color-blue)"
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
        color: var(--color-green);
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

export default Investments