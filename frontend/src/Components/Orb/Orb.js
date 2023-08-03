/**
 * Orb Component
 * 
 * Renders a moving blurred orb in the background
 */

import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useWindowSize } from '../../utils/useWindowSize';

function Orb({ active }) {
    const { width, height } = useWindowSize()

    const moveOrb = keyframes`
        0%{
            transform: translate(0, 0);
        }
        50%{
            transform: translate(${width}px, ${height / 2}px);
        }
        100%{
            transform: translate(0, 0);
        }
    `;

    // Switches color and moving orb based on active page
    const getColorFromActive = () => {
        switch (active) {
            case 1:
                return 'linear-gradient(319deg, #faa499 0%, #f7dd85 37%, #ffc55c 100%);';
            case 2:
                return 'linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%);';
            case 3:
                return 'linear-gradient(180deg, #F56692 0%, #F2994A 100%);';
            case 4:
                return 'linear-gradient(315deg, #182b3a 0%, #20a4f3 74%);';
            default:
                return 'linear-gradient(315deg, #ffffff 0%, #91a6ff 74%);';
        }
    };

    const OrbStyled = styled.div`
        width: 150vh;
        height: 100vh;
        position: absolute;
        border-radius: 50%;
        margin-left: -37vh;
        margin-top: -37vh;
        background: ${getColorFromActive()};
        filter: blur(300);
        animation: ${moveOrb} 15s alternate linear infinite;
    `;

    return (
        <OrbStyled></OrbStyled>
    )
}

export default Orb