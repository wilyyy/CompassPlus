import React from 'react';
import styled from "styled-components/native";
import { COLORS } from '../../constants/styles.js';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Circle = styled.View`
    position:absolute;
    z-index: -2;
    width: 850px;
    height: 450px;
    background-color: ${COLORS.SPACECADET};
    border-bottom-left-radius: 800px;
    border-bottom-right-radius: 800px;
    top:-95px;
`;

export default function BgCircle() {
    return (
        <Circle />
    )
}

