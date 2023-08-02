import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useWindowSize } from '../../utils/useWindowSize';

function Orb( {active} ) {
    const {width, height} = useWindowSize()

    const moveOrb = keyframes`
        0%{
            transform: translate(0, 0);
        }
        50%{
            transform: translate(${width}px, ${height/2}px);
        }
        100%{
            transform: translate(0, 0);
        }
    `;
    const getColorFromActive = () => {
        switch (active) {
            case 1:
                return 'linear-gradient(180deg, #CCCCCC 0%, #999999 100%);';
            case 2:
                return 'linear-gradient(180deg, #90EE90 0%, #00FF00 100%);';
            case 3:
                return 'linear-gradient(180deg, #F56692 0%, #F2994A 100%);';
            case 4:
                return 'linear-gradient(180deg, #66A3FF 0%, #007BFF 100%);';
            default:
                return 'linear-gradient(180deg, #66A3FF 0%, #007BFF 100%);';
        }
    };

    const OrbStyled = styled.div`
        width: 70vh;
        height: 70vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -37vh;
        margin-top: -37vh;
        background: ${getColorFromActive()};
        filter: blur(350px);
        animation: ${moveOrb} 15s alternate linear infinite;
    `;

    return (
        <OrbStyled></OrbStyled>
    )
}

export default Orb