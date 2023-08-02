import React, { useEffect } from 'react'
import { styled } from 'styled-components';
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import InvestmentForm from './InvestmentForm';
import IncomeItem from '../IncomeItem/IncomeItem';

function Investments() {
  return (
    <InvestmentsStyled>
        <InnerLayout>
            
        </InnerLayout>
    </InvestmentsStyled>
  )
}

const InvestmentsStyled = styled.div`

`;

export default Investments