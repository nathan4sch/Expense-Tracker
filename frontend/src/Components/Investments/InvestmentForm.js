/**
 * Investment Form Component
 * 
 * Creates the logic for the investment form used to add an investment
 */

import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';


function InvestmentForm() {
    // Access the global context and state variables
    const { addInvestment, error, setError } = useGlobalContext()
    const [inputState, setInputState] = useState({
        amount: '',
        date: '',
        category: '',
    })

    // Extract values from inputState
    const { amount, date, category } = inputState;

    // Event handler for input changes
    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value })
        setError('')
    }

    // Event handler for form submission
    const handleSubmit = e => {
        e.preventDefault()
        addInvestment(inputState)

        // Clear the form inputs after submission
        setInputState({
            amount: '',
            date: '',
            category: '',
        })
    }

    // Render the InvestmentForm component
    return (
        <InvestmentFormStyled onSubmit={handleSubmit}>
            {error && <p className='error'>{error}</p>}
            <div className="input-control">
                <input value={amount}
                    type="text"
                    name={'amount'}
                    placeholder={'Investment Amount'}
                    onChange={handleInput('amount')}
                />
            </div>
            <div className="input-control">
                <DatePicker
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({ ...inputState, date: date })
                    }}
                />
            </div>
            <div className="selects input-control">
                {/* Dropdown to select the investment category */}
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value="" disabled >Select Option</option>
                    <option value="Personal Savings">Personal Savings</option>
                    <option value="Roth IRA">Roth IRA</option>
                    <option value="Stocks">Stocks</option>
                    <option value="Bonds">Bonds</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="submit-btn">
                {/* Button to submit the form */}
                <Button
                    name={'Add Investment'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'dodgerblue'}
                    color={'#fff'}
                />
            </div>
        </InvestmentFormStyled>
    )
}

// Styled components for the InvestmentForm
const InvestmentFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    input, textarea, select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        &::placeholder{
            color: rgba(34, 34, 96, 0.4);
        }
    }
    .input-control{
        input{
            width: 100%;
        }
    }

    .selects{
        display: flex;
        select{
            color: rgba(34, 34, 96, 0.4);
            &:focus, &:active{
                color: rgba(34, 34, 96, 1);
            }
        }
    }

    .submit-btn{
        button{
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            &:hover{
                background: blue !important;
            }
        }
    }
`;
export default InvestmentForm