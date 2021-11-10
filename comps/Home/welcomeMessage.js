import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import styled from "styled-components/native";

import { COLORS } from '../../constants/styles.js';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Container = styled.View`
    width: ${windowWidth};
    height: 100px;
    align-items: center;
`;

const TextCont = styled.View`
    width: 297px;
    height: auto;
`;

const H1 = styled.Text`
    font-size: 24px;
    font-weight: 700;
    color: ${COLORS.CAROLINABLUE};
`;
const H2 = styled.Text`
    font-size: 16px;
    color: ${COLORS.SPACECADET};
`;

const WelcomeMessage = () => {
    return <Container>
        <TextCont>
            <H1>Welcome to CompassPlus</H1>
            <H2>We’re happy to have you on board. Here are some quick tips to help you start your journey.</H2>
        </TextCont>
    </Container>
}

export default WelcomeMessage;