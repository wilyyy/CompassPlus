import React from 'react';
import styled from "styled-components/native";
import { COLORS } from '../../constants/styles.js';


const Circle = styled.View`
    position:absolute;
    z-index: -2;
    width: 400px;
    height: 400px;
    background-color: ${COLORS.SPACECADET};
    border-radius: 100;
    top:-100px;
`;

export default function BgCircle() {
    return (
        <Circle />
    )
}