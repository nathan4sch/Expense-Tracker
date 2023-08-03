import React from 'react'
import styled from 'styled-components'

/**
 * A reusable button component
 * 
 * @param {string} name - The text content of the button
 * @param {JSX.Element} icon - Icon to be displayed before the button text
 * @param {function} onClick - Event handler
 * @param {string} bg - Background color of the button
 * @param {string} bPad - Padding for the button
 * @param {string} color - Text color for the button
 * @param {string} bRad - Border radius of the button
 * 
 * @returns {JSX.Element} The rendered Button component.
 */
function Button({ name, icon, onClick, bg, bPad, color, bRad }) {
    return (
        <ButtonStyled style={{
            background: bg,
            padding: bPad,
            borderRadius: bRad,
            color: color,
        }} onClick={onClick}>
            {icon}
            {name}
        </ButtonStyled>
    )
}

// Styled component for the button, using styled-components library
const ButtonStyled = styled.button`
    outline: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    display: flex;
    align-items: center;
    gap: .5rem;
    cursor: pointer;
    transition: all .4s ease-in-out;
`;


export default Button