/**
 * Investment Item Component
 * 
 * Creates the list of items seen on screen when the user creates an investment
 */

import React from 'react'
import styled from 'styled-components'
import { dollar, calender, trash, piggy, stocks, roth, circle, bond } from '../../utils/Icons';
import Button from '../Button/Button';
import { dateFormat } from '../../utils/dateFormat';

function InvestmentItem({
    id,
    amount,
    date,
    category,
    deleteItem,
    indicatorColor,
    type
}) {

    // Returns icon based on category of the investment
    const investmentCatIcon = () => {
        switch (category) {
            case 'Personal Savings':
                return piggy;
            case 'Roth IRA':
                return roth;
            case 'Stocks':
                return stocks;
            case 'Bonds':
                return bond;
            case 'other':
                return circle;
            default:
                return ''
        }
    }

    return (
        <InvestmentItemStyled indicator={indicatorColor}>
            <div className="icon">
                {investmentCatIcon()}
            </div>
            <div className="content">
                <h5>{category}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p>{dollar} {amount}</p>
                        <p>{calender} {dateFormat(date)}</p>

                    </div>
                    <div className="btn-con">
                        <Button
                            icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hColor={'var(--color-green)'}
                            onClick={() => deleteItem(id)}
                        />
                    </div>
                </div>
            </div>
        </InvestmentItemStyled>
    )
}

const InvestmentItemStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #222260;
    .icon{
        width: 80px;
        height: 80px;
        border-radius: 20px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        i{
            font-size: 2.6rem;
        }
    }

    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .2rem;
        h5{
            font-size: 1.3rem;
            padding-left: 2rem;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background: ${props => props.indicator};
            }
        }

        .inner-content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                display: flex;
                align-items: center;
                gap: 1.5rem;
                p{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--primary-color);
                    opacity: 0.8;
                }
            }
        }
    }
`;

export default InvestmentItem