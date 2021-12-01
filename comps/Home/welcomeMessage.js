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
    min-height: 100px;
    height:15%;
    align-items: center;
    margin-bottom:5%;
        align-content: center;
    justify-content: center;
    width: 90%;    
`;

const TextCont = styled.View`
    width: 100%;
    margin-top: 30px;
`;

const H1 = styled.Text`
    font-size: 26px;
    font-family: 'Ubuntu_700Bold';
    color: ${COLORS.CAROLINABLUE};
    text-align: center;
`;
const H2 = styled.Text`
    font-size: 16px;
    color: ${COLORS.SPACECADET};
    font-family: 'Ubuntu_400Regular';
    text-align: justify;
    top: 5px;
    text-align: center;
    padding-bottom: 20px;
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
                <H2>We’re happy to have you on board! </H2>
            </TextCont>
        </Container>
    }
}

export default WelcomeMessage;