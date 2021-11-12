import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import styled from "styled-components/native";

import { COLORS } from '../../constants/styles.js';

import {
    useFonts,
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
} from '@expo-google-fonts/ubuntu';
import AppLoading from 'expo-app-loading';

const Container = styled.View`
    height: 100px;
    align-items: center;
`;

const TextCont = styled.View`
    width: 297px;
    height: auto;
`;

const H1 = styled.Text`
    font-size: 24px;
    font-family: 'Ubuntu_700Bold';
    color: ${COLORS.CAROLINABLUE};
`;
const H2 = styled.Text`
    font-size: 16px;
    color: ${COLORS.SPACECADET};
    font-family: 'Ubuntu_400Regular';
`;

const WelcomeMessage = () => {
    let [fontsLoaded] = useFonts({
        Ubuntu_300Light,
        Ubuntu_300Light_Italic,
        Ubuntu_400Regular,
        Ubuntu_400Regular_Italic,
        Ubuntu_500Medium,
        Ubuntu_500Medium_Italic,
        Ubuntu_700Bold,
        Ubuntu_700Bold_Italic,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return <Container>
            <TextCont>
                <H1>Welcome to CompassPlus</H1>
                <H2>We’re happy to have you on board. Here are some quick tips to help you start your journey.</H2>
            </TextCont>
        </Container>
    }
}

export default WelcomeMessage;